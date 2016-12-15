const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const HeaderBarComponent = require('../components/header-bar.jsx');

class HeaderBar extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['serialDevUpdate','refreshPort','selectPort']);
        this.state = {
            serialDev: [],
            networkDev: []
        };
    }
    serialDevUpdate (data) {
        this.setState({serialDev: data});
    }
    refreshPort(){
        this.props.kb.serial.getDevices(this.serialDevUpdate);
    }
    selectPort(eventKey){
        console.log("selectPort "+eventKey);
    }
    componentDidMount () {
        this.refreshPort();
    }

    render () {
        const {
            kb,
            ...props
        } = this.props;
        return (
            <HeaderBarComponent
                serialDev={this.state.serialDev}
                refreshPort={this.refreshPort}
                selectPort={this.selectPort}
                toggleArduinoPanel={this.props.toggleArduinoPanel}
                toggleStage={this.props.toggleStage}
                {...props}
            />
        );
    }

}

HeaderBar.propTypes = {
    kb: React.PropTypes.instanceOf(KittenBlock)
};

module.exports = HeaderBar;


