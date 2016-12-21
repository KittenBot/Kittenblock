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
    render() {
        const {
            version,
            openSetArduinoPathDialog,
            arduinoPath,
    ...componentProps
        } = this.props;
        return (
            <Modal
                isOpen={this.props.visible}
                onRequestHide={this.props.closeModal}
            >
                <ModalHeader>
                    <ModalClose onClick={this.props.closeModal}/>
                    <ModalTitle>Setup Menu</ModalTitle>
                </ModalHeader>
                <ModalBody>
                <div>
                    <label id="versionNum">KittenBlock {version}</label>
                    <Button bsStyle="success">Update to ?</Button>
                </div>
                <div>
                    <label>Arduino Path</label>
                    <br/>
                        <FormControl
                            type="text"
                            placeholder="Arduino Path"
                            value={arduinoPath}
                        />
                    <ButtonToolbar>
                        <Button bsStyle="default" onClick={openSetArduinoPathDialog}>Set</Button>
                        <Button bsStyle="default">Copy Arduino Library</Button>
                    </ButtonToolbar>
                </div>
                <div>
                    <label>Language</label>
                    <br/>
                    <ButtonGroup>
                        <DropdownButton title="Language" bsStyle="default" id="langDropdown">
                            <MenuItem eventKey="1">English</MenuItem>
                            <MenuItem eventKey="2">español</MenuItem>
                            <MenuItem eventKey="3">中文</MenuItem>
                            <MenuItem eventKey="4">français</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
                <div>
                    <label>Plugins</label>
                    <br/>

                </div>

                </ModalBody>
                <ModalFooter>
                    <Button bsStyle="default" className="pull-left">Bug Report</Button>
                    <Button bsStyle="primary">Save Config</Button>
                </ModalFooter>

            </Modal>
        )

    }
}

module.exports = SetupModalComponent;
