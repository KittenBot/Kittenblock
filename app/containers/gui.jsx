var path = require('path');
const bindAll = require('lodash.bindall');
const defaultsDeep = require('lodash.defaultsdeep');
const React = require('react');
const VM = require('../../scratch-vm');
const ScratchBlocks = require('../../scratch-blocks');
const KittenBlock = require('../../kittenblock-pc');

const VMManager = require('../lib/vm-manager');
const MediaLibrary = require('../lib/media-library');
const shapeFromPropTypes = require('../lib/shape-from-prop-types');

const Blocks = require('./blocks.jsx');
const GUIComponent = require('../components/gui.jsx');
const GreenFlag = require('./green-flag.jsx');
const SpriteSelector = require('./sprite-selector.jsx');
const Stage = require('./stage.jsx');
const StopAll = require('./stop-all.jsx');
const HeaderBar = require('./header-bar.jsx');
const EditorTabs = require('./editor-tabs.jsx');
const ArduinoPanel = require('./arduino-panel.jsx');
const SetupModal = require('./setup-modal.jsx');

const SpriteLibrary = require('./sprite-library.jsx');
const CostumeLibrary = require('./costume-library.jsx');
const BackdropLibrary = require('./backdrop-library.jsx');

import { AlertList  } from "react-bs-notifier";


class GUI extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['closeModal','toggleArduinoPanel','toggelStage','sendCommonData','portReadLine','deviceQuery','clearConsole',
                        'stopProject','restoreFirmware','openIno','updateEditorInstance','uploadProject','appendLog',
                        'openLoadProjectDialog','loadProject','selectLanguage','applyConfig','selectTarget',
                        'consoleSend','consoleClear','translateCode','saveProject','changeTitle','notify','updaterCallback','updateKittenblock']);
        this.vmManager = new VMManager(this.props.vm);
        this.mediaLibrary = new MediaLibrary();
        this.consoleMsgBuff=[{msg: "Hello KittenBlock", color: "green"}];
        this.editor;
        this.state = {
            currentModal: null,
            showArduinoPanel: false,
            showStage: true,
            consoleMsg: this.consoleMsgBuff,
            editorCode: '#include <Arduino.h>\n\nvoid setup(){\n}\n\nvoid loop(){\n}\n\n',
            language: this.props.kb.config.language,
            pluginlist: this.props.kb.pluginlist,
            projectName: "",
            firmwares: [{name:'arduino','path':null}],
            alerts:[],
            alertTimeout:5000,
            updater: {'version':0,'path':''},
        };
        require("../language/"+this.props.kb.config.language.file);
    }
    clearConsole(){
        this.consoleMsgBuff = [];
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    sendCommonData(msg){
        this.props.kb.sendCmd(msg);
        if(msg instanceof Uint8Array){
            var msg = Buffer.from(msg).toString('hex')
            this.consoleMsgBuff.push({msg:msg,color:"Gray"});
            this.setState({consoleMsg:this.consoleMsgBuff})
        }else{
            this.consoleMsgBuff.push({msg:msg,color:"Gray"});
            this.setState({consoleMsg:this.consoleMsgBuff})
        }

    }
    appendLog(msg,color){
        if(!color)
            color = "Gray";
        this.consoleMsgBuff.push({msg:msg,color:color});
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    portReadLine(line){
        this.props.kb.arduino.parseLine(line);
        this.appendLog(line,'LightSkyBlue');
    }
    deviceQuery(data){
        console.log("query data "+JSON.stringify(data));
        return this.props.kb.arduino.queryData(data);
    }
    stopProject(data){
        //this.sendCommonData("M999");
    }
    applyConfig(){
        this.props.kb.saveConfig();
        this.props.kb.reloadApp();
    }
    componentDidMount () {
        // add nwdirectory tag to input file
        this.vmManager.attachKeyboardEvents();
        this.props.vm.loadProject(this.props.projectData);
        // kittenblock link hardware
        this.props.vm.runtime.ioDevices.serial.regSendMsg(this.sendCommonData);
        vm.runtime.ioDevices.serial.regQueryData(this.deviceQuery);
        this.props.kb.arduino.sendCmdEvent.addListener(this.sendCommonData);
        this.props.vm.start();
        this.props.kb.loadDefaultProj();
        this.saveProjDialog.nwsaveas = "KittenBot";
        // check if firmware exist in plugin
        if("firmware" in this.props.kb.plugin){
            var pluginName = this.props.kb.pluginmng.enabled;
            var firmpath = path.resolve(this.props.kb.pluginpath,pluginName,this.props.kb.plugin.firmware);
            var firmobj = {"name":pluginName,'path':firmpath}
            this.state.firmwares.push(firmobj);
            this.setState({firmwares:this.state.firmwares});
        }
        // check if plugin has parseLine method
        if('parseLine' in this.props.kb.plugin){
            this.props.kb.setPluginParseLine(this.props.kb.plugin.parseLine);
        }
        this.props.kb.notify = this.notify;
        // get latest version from server
        this.props.kb.updater.getServer(this.updaterCallback);
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.projectData !== nextProps.projectData) {
            this.props.vm.loadProject(nextProps.projectData);
        }
    }
    componentWillUnmount () {
        this.vmManager.detachKeyboardEvents();
        this.props.vm.stopAll();
    }
    openModal (modalName) {
        console.log("open modal "+modalName);
        this.setState({currentModal: modalName});
    }
    closeModal () {
        this.setState({currentModal: null});
    }
    toggleArduinoPanel(){
        this.setState({showArduinoPanel: !this.state.showArduinoPanel});
    }
    toggelStage(){
        this.setState({showStage: !this.state.showStage})
    }
    restoreFirmware(firmware){
        var code = this.props.kb.loadFirmware(firmware.path);
        this.setState({editorCode: code});
    }
    updateEditorInstance(editor){
        this.editor = editor.editor;
    }
    openIno(){
        var code = this.editor.getValue();
        this.props.kb.openIno(code);
    }
    uploadProject() {
        var code = this.editor.getValue();
        this.props.kb.uploadProject(code,this.appendLog);
    }
    openLoadProjectDialog(){
        this.loadProjDialog.click();
    }
    openSaveProjectDialog(){
        this.saveProjDialog.click();
    }
    loadProject(){
        var file = this.loadProjDialog.value;
        var extName = path.extname(file);
        if(extName=='.sb2'){
            var name = this.props.kb.loadSb2(file);
            this.setState({projectName:name});
        }else if(extName=='.kb'){
            var kbobj = this.props.kb.loadKb(file);
            var xml = Blockly.Xml.textToDom(kbobj.xml);
            var workspace = this.refs.Blocks.workspace
            Blockly.Xml.domToWorkspace(xml, workspace);
            this.setState({projectName:kbobj.name});
        }
    }
    saveProject(){
        var file = this.saveProjDialog.value;
        var workspace = this.refs.Blocks.workspace
        var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        //console.log("save proj "+file+" "+xml );
        this.props.kb.saveKb(file,xml);
    }
    selectLanguage(lang){
        var langobj={"name":'',"file":''}
        switch (lang){
            case 'en':
                langobj.name='english';
                langobj.file='en.js';
                break;
            case 'es':
                langobj.name='español';
                langobj.file='es.js';
                break;
            case 'zh-hans':
                langobj.name='中文';
                langobj.file='zh-hans.js';
                break;
            case 'fr':
                langobj.name='français';
                langobj.file='fr.js';
                break;
        }
        this.setState({language:langobj});
        this.props.kb.config.language = langobj;
    }
    selectTarget(id){
        this.props.vm.setEditingTarget(id);
    }
    consoleSend(txt){
        this.sendCommonData(txt);
    }
    consoleClear(){
        this.consoleMsgBuff=[];
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    translateCode(){
        var code = this.refs.Blocks.sb2cpp();
        this.setState({editorCode:code});
    }
    selectPlugin(plugin){
        console.log("select plugin "+plugin);
        var ret = this.props.kb.selectPlugin(plugin);
        this.setState({pluginlist:ret});
    }
    changeTitle(e){
        this.setState({projectName:e});
        this.saveProjDialog.nwsaveas = e;
    }
    onAlertDismissed(alert) {
        const alerts = this.state.alerts;
        // find the index of the alert that was dismissed
        const idx = alerts.indexOf(alert);

        if (idx >= 0) {
            this.setState({
                // remove the alert from the array
                alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
            });
        }
    }
    notify(type,msg){
        const newAlert ={
            id: (new Date()).getTime(),
            type: type,
            message: msg
        };
        this.setState({
            alerts: [...this.state.alerts, newAlert]
        });
    }
    updaterCallback(obj){
        this.setState({updater:obj});
    }
    updateKittenblock(){
        console.log("do update"+this.state.updater.version);
    }
    render () {
        let {
            backdropLibraryProps,
            basePath,
            blocksProps,
            costumeLibraryProps,
            greenFlagProps,
            projectData, // eslint-disable-line no-unused-vars
            spriteLibraryProps,
            spriteSelectorProps,
            stageProps,
            stopAllProps,
            headerBarProps,
            setupModalProps,
            editorTabsProps,
            arduinoPanelProps,
            vm,
            kb,
            ...guiProps
        } = this.props;
        backdropLibraryProps = defaultsDeep({}, backdropLibraryProps, {
            mediaLibrary: this.mediaLibrary,
            onRequestClose: this.closeModal,
            visible: this.state.currentModal === 'backdrop-library'
        });
        blocksProps = defaultsDeep({}, blocksProps, {
            options: {
                media: `${basePath}static/blocks-media/`
            },
            showStage: this.state.showStage
        });
        costumeLibraryProps = defaultsDeep({}, costumeLibraryProps, {
            mediaLibrary: this.mediaLibrary,
            onRequestClose: this.closeModal,
            visible: this.state.currentModal === 'costume-library'
        });
        spriteLibraryProps = defaultsDeep({}, spriteLibraryProps, {
            mediaLibrary: this.mediaLibrary,
            onRequestClose: this.closeModal,
            visible: this.state.currentModal === 'sprite-library'
        });
        spriteSelectorProps = defaultsDeep({}, spriteSelectorProps, {
            openNewBackdrop: () => this.openModal('backdrop-library'),
            openNewCostume: () => this.openModal('costume-library'),
            openNewSprite: () => this.openModal('sprite-library'),
            selectTarget: (e)=>this.selectTarget(e),
        });
        setupModalProps = defaultsDeep({},setupModalProps, {
            visible: this.state.currentModal === 'setup-modal',
            onRequestClose: this.closeModal,
            language: this.state.language,
            selectLanguage: this.selectLanguage,
            applyconfig: this.applyConfig,
            pluginlist: this.state.pluginlist,
            updater: this.state.updater,
            selectPlugin: (plugin)=>this.selectPlugin(plugin),
            updateKittenblock: ()=>this.updateKittenblock(),
        });
        headerBarProps = defaultsDeep({},headerBarProps,{
            toggleArduinoPanel: ()=>this.toggleArduinoPanel(),
            toggleStage: ()=>this.toggelStage(),
            openSetupModal: ()=>this.openModal("setup-modal"),
            portReadLine: (line)=>this.portReadLine(line),
            openLoadProjectDialog:()=>this.openLoadProjectDialog(),
            openSaveProjectDialog:()=>this.openSaveProjectDialog(),
            projectName: this.state.projectName,
            changeTitle: (t)=>this.changeTitle(t)
        });
        arduinoPanelProps = defaultsDeep({}, arduinoPanelProps, {
            visible: this.state.showArduinoPanel,
            code: this.state.editorCode,
            consoleMsg: this.state.consoleMsg,
            codeUpdate: this.updateEditorInstance,
            firmwares:this.state.firmwares,
            restoreFirmware: (f)=>this.restoreFirmware(f),
            openIno: ()=>this.openIno(),
            uploadProj: ()=>this.uploadProject(),
            consoleSend: (txt)=>this.consoleSend(txt),
            consoleClear: ()=>this.consoleClear(),
            translateCode: ()=>this.translateCode()
        });
        editorTabsProps = defaultsDeep({},editorTabsProps,{
            showStage: this.state.showStage
        });
        if (this.props.children) {
            return (
                <GUIComponent {... guiProps}>
                    {this.props.children}
                </GUIComponent>
            );
        }
        /* eslint-disable react/jsx-max-props-per-line, lines-around-comment */
        return (
            <GUIComponent {... guiProps}>
                <GreenFlag vm={vm} {...greenFlagProps} />
                <StopAll vm={vm} stopProject={this.stopProject} {...stopAllProps} />
                <Stage vm={vm} {...stageProps} />
                <SpriteSelector vm={vm} kb={kb} {... spriteSelectorProps} />
                <Blocks ref="Blocks" vm={vm} kb={kb} {... blocksProps} />
                <SpriteLibrary vm={vm} kb={kb} {...spriteLibraryProps} />
                <CostumeLibrary vm={vm} {...costumeLibraryProps} />
                <BackdropLibrary vm={vm} {...backdropLibraryProps} />
                <HeaderBar kb={kb} {...headerBarProps} />
                <EditorTabs vm={vm} {...editorTabsProps} />
                <ArduinoPanel vm={vm} {...arduinoPanelProps} />
                <SetupModal kb={kb} {...setupModalProps}/>
                <input type="file" style={{display:'none'}} ref={(ref) => this.loadProjDialog = ref} onChange={this.loadProject} accept=".sb2,.kb"/>
                <input type="file" style={{display:'none'}} ref={(ref) => this.saveProjDialog = ref} onChange={this.saveProject} accept=".kb"/>
                <AlertList
                    position='top-left'
                    alerts={this.state.alerts}
                    timeout={this.state.alertTimeout}
                    onDismiss={this.onAlertDismissed.bind(this)}
                />
            </GUIComponent>
        );
        /* eslint-enable react/jsx-max-props-per-line, lines-around-comment */
    }
}

GUI.propTypes = {
    backdropLibraryProps: shapeFromPropTypes(BackdropLibrary.propTypes, {omit: ['vm']}),
    basePath: React.PropTypes.string,
    blocksProps: shapeFromPropTypes(Blocks.propTypes, {omit: ['vm']}),
    children: React.PropTypes.node,
    costumeLibraryProps: shapeFromPropTypes(CostumeLibrary.propTypes, {omit: ['vm']}),
    greenFlagProps: shapeFromPropTypes(GreenFlag.propTypes, {omit: ['vm']}),
    projectData: React.PropTypes.string,
    spriteLibraryProps: shapeFromPropTypes(SpriteLibrary.propTypes, {omit: ['vm']}),
    spriteSelectorProps: shapeFromPropTypes(SpriteSelector.propTypes, {omit: ['vm']}),
    stageProps: shapeFromPropTypes(Stage.propTypes, {omit: ['vm']}),
    stopAllProps: shapeFromPropTypes(StopAll.propTypes, {omit: ['vm']}),
    vm: React.PropTypes.instanceOf(VM),
    kb: React.PropTypes.instanceOf(KittenBlock),
};

GUI.defaultProps = {
    backdropLibraryProps: {},
    basePath: '/',
    blocksProps: {},
    costumeLibraryProps: {},
    greenFlagProps: {},
    spriteSelectorProps: {},
    spriteLibraryProps: {},
    setupModalProps: {},
    stageProps: {},
    stopAllProps: {},
    arduinoPanelProps: {},
    headerBarProps: {},
    editorTabsProps: {},
    vm: new VM(),
    kb: new  KittenBlock()
};

module.exports = GUI;
