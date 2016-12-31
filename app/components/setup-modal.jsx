const bindAll = require('lodash.bindall');
const React = require('react');

import { ButtonGroup,Button,DropdownButton,FormControl,ButtonToolbar,MenuItem} from 'react-bootstrap';


import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

class SetupModalComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'setLang',
            'selectPlugin'
        ]);
    }
    setLang(lang){
        this.props.selectLanguage(lang);
    }
    selectPlugin(plugin){
        this.props.selectPlugin(plugin);
    }
    render() {
        const {
            version,
            openSetArduinoPathDialog,
            arduinoPath,
            language,
            applyconfig,
            pluginlist,
            copyArduinoLib,
            updateKittenblock,
            updater,
    ...componentProps
        } = this.props;
        var plugins = [];

        for (var i = 0; i < pluginlist.length; i += 1) {
            var p = pluginlist[i];
            var src = "../plugins/"+p.name+"/"+p.name+".jpg";
            var filter = p.active==true?'none':'grayscale(100%) blur(3px)';
            plugins.push(
                <div className="col-xs-4 col-md-4 text-center" key={p.name}>
                    <img style={{width:150,WebkitFilter:filter}} src={src}
                    onClick={this.selectPlugin.bind(this,p.name)}
                    />
                    <span>{p.name}</span>
                </div>
            );
        };

        return (
            <Modal
                isOpen={this.props.visible}
                onRequestHide={this.props.closeModal}
            >
                <ModalHeader>
                    <ModalClose onClick={this.props.closeModal}/>
                    <ModalTitle>{Blockly.Msg.SETUP_MENU}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                <div className="setup-items">
                    <label id="versionNum">KittenBlock {version}</label>
                    <br/>
                    <Button bsStyle="success"
                    style={{display:updater.version>version?'inline-box':'none'}}
                    onClick={updateKittenblock}
                    >Update to {updater.version}</Button>
                </div>
                <div className="setup-items">
                    <label>Arduino Path</label>
                    <br/>
                    <FormControl
                        type="text"
                        placeholder="Arduino Path"
                        value={arduinoPath}
                    />
                    <br/>
                    <ButtonToolbar>
                        <Button bsStyle="default" onClick={openSetArduinoPathDialog}>{Blockly.Msg.SET}</Button>
                        <Button bsStyle="default" onClick={copyArduinoLib}>Copy Arduino Library</Button>
                    </ButtonToolbar>
                </div>
                <div className="setup-items">
                    <label>{Blockly.Msg.LANGUAGE}</label>
                    <br/>
                    <ButtonGroup>
                        <DropdownButton title={language.name} bsStyle="default" id="langDropdown">
                            <MenuItem eventKey="en" onSelect={this.setLang}>English</MenuItem>
                            <MenuItem eventKey="es" onSelect={this.setLang}>español</MenuItem>
                            <MenuItem eventKey="zh-hans" onSelect={this.setLang}>中文</MenuItem>
                            <MenuItem eventKey="fr" onSelect={this.setLang}>français</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
                <div className="setup-items">
                    <label>{Blockly.Msg.PLUGIN}</label>
                    <br/>
                    <div className="row">
                        {plugins}
                    </div>
                </div>

                </ModalBody>
                <ModalFooter>
                    <Button bsStyle="primary" onClick={applyconfig}>{Blockly.Msg.SAVE_CONFIG}</Button>
                </ModalFooter>

            </Modal>
        )

    }
}

module.exports = SetupModalComponent;
