const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const HeaderBarComponent = require('../components/header-bar.jsx');

class HeaderBar extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['serialDevUpdate','refreshPort','selectPort','portConnected','portOnReadline','portClosed']);
        this.state = {
            portDev: [],
            connectedPort: null
        };
    }
    serialDevUpdate (data) {
        this.setState({portDev: data});
    }
    refreshPort(){
        this.props.kb.enumPort(this.serialDevUpdate);
    }
    portConnected(port){
        console.log("port connected "+port);
        this.setState({connectedPort:port});
    }
    portOnReadline(line){
        console.log("port get line "+line);
    }
    portClosed(){
        console.log("port closed ");
    }
    selectPort(port){
        console.log("connect to port "+port);
        this.props.kb.connectPort(port,this.portConnected,this.portOnReadline,this.portClosed);
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
                serialDev={this.state.portDev}
                refreshPort={this.refreshPort}
                selectPort={this.selectPort}
                toggleArduinoPanel={this.props.toggleArduinoPanel}
                toggleStage={this.props.toggleStage}
                connectedPort={this.state.connectedPort}
                {...props}
            />
        );
    }

}

HeaderBar.propTypes = {
    kb: React.PropTypes.instanceOf(KittenBlock)
};

module.exports = HeaderBar;


