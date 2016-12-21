const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const SetupModalComponent = require('../components/setup-modal.jsx');

class SetupModal  extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {
            kb,
            ...props
        } = this.props;
        return (
            <SetupModalComponent
                visible={this.props.visible}
                closeModal={this.props.onRequestClose}
                version={this.props.kb.config.version}
                openSetArduinoPathDialog={this.props.openSetArduinoPathDialog}
                arduinoPath={this.props.arduinoPath}
                language={this.props.language}
                selectLanguage={this.props.selectLanguage}
                applyconfig={this.props.applyconfig}
                pluginlist={this.props.pluginlist}
            />
        );
    }
}


SetupModal.propTypes = {
    visible: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func,
    kb: React.PropTypes.instanceOf(KittenBlock)
};


module.exports = SetupModal;

