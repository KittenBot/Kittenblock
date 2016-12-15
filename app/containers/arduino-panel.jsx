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
