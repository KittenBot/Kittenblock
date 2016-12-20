const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const ArduinoPanelComponent = require('../components/arduino-panel.jsx');


class ArduinoPanel extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {
            kb,
            ...props
        } = this.props;
        return (
            <ArduinoPanelComponent
                visible={this.props.visible}
                code={this.props.code}
                consoleMsg={this.props.consoleMsg}
                restoreFirmware={this.props.restoreFirmware}
                openIno={this.props.openIno}
                codeRef={this.props.codeUpdate}
                uploadProj={this.props.uploadProj}
                {...props}
            />
        );
    }

}

ArduinoPanel.propTypes = {
    visible: React.PropTypes.bool,
    kb: React.PropTypes.instanceOf(KittenBlock)
};

module.exports = ArduinoPanel;
