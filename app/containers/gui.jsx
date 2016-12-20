const bindAll = require('lodash.bindall');
const defaultsDeep = require('lodash.defaultsdeep');
const React = require('react');
const VM = require('../../scratch-vm');
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

class GUI extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['closeModal','toggleArduinoPanel','toggelStage','sendCommonData','portReadLine','deviceQuery','clearConsole','stopProject','restoreFirmware']);
        this.vmManager = new VMManager(this.props.vm);
        this.mediaLibrary = new MediaLibrary();
        this.consoleMsgBuff=[{msg: "Hello KittenBlock", color: "green"}];
        this.state = {
            currentModal: null,
            showArduinoPanel: false,
            showStage: true,
            consoleMsg: this.consoleMsgBuff,
            editorCode: '#include <Arduino.h>\n\nvoid setup(){\n}\n\nvoid loop(){\n}\n\n',
        }
    }
    clearConsole(){
        this.consoleMsgBuff = [];
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    sendCommonData(msg){
        this.props.kb.sendCmd(msg);
        this.consoleMsgBuff.push({msg:msg,color:"Gray"});
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    portReadLine(line){
        this.props.kb.arduino.parseLine(line);
        this.consoleMsgBuff.push({msg:line,color:"LightSkyBlue"});
        this.setState({consoleMsg:this.consoleMsgBuff})
    }
    deviceQuery(data){
        console.log("query data "+JSON.stringify(data));
        return this.props.kb.arduino.queryData(data);
    }
    stopProject(data){
        this.sendCommonData("M999");
    }
    componentDidMount () {
        this.vmManager.attachKeyboardEvents();
        this.props.vm.loadProject(this.props.projectData);
        // kittenblock link hardware
        this.props.vm.runtime.ioDevices.serial.regSendMsg(this.sendCommonData);
        vm.runtime.ioDevices.serial.regQueryData(this.deviceQuery);
        this.props.kb.arduino.sendCmdEvent.addListener(this.sendCommonData);
        this.props.vm.start();
        this.props.kb.loadDefaultProj();
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
    restoreFirmware(){
        var code = this.props.kb.loadFirmware();
        this.setState({editorCode: code});
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
            openNewSprite: () => this.openModal('sprite-library')
        });
        setupModalProps = defaultsDeep({},setupModalProps, {
            visible: this.state.currentModal === 'setup-modal',
            onRequestClose: this.closeModal
        });
        headerBarProps = defaultsDeep({},headerBarProps,{
            toggleArduinoPanel: ()=>this.toggleArduinoPanel(),
            toggleStage: ()=>this.toggelStage(),
            openSetupModal: ()=>this.openModal("setup-modal"),
            portReadLine: (line)=>this.portReadLine(line)
        });
        arduinoPanelProps = defaultsDeep({}, arduinoPanelProps, {
            visible: this.state.showArduinoPanel,
            code: this.state.editorCode,
            consoleMsg: this.state.consoleMsg,
            restoreFirmware: ()=>this.restoreFirmware()
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
                <SpriteSelector vm={vm} {... spriteSelectorProps} />
                <Blocks vm={vm} kb={kb} {... blocksProps} />
                <SpriteLibrary vm={vm} {...spriteLibraryProps} />
                <CostumeLibrary vm={vm} {...costumeLibraryProps} />
                <BackdropLibrary vm={vm} {...backdropLibraryProps} />
                <HeaderBar kb={kb} {...headerBarProps} />
                <EditorTabs vm={vm} {...editorTabsProps} />
                <ArduinoPanel vm={vm} {...arduinoPanelProps} />
                <SetupModal kb={kb} {...setupModalProps}/>
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
