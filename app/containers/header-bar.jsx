const bindAll = require('lodash.bindall');
const React = require('react');
const KittenBlock = require('../../kittenblock-pc');

const HeaderBarComponent = require('../components/header-bar.jsx');

class HeaderBar extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['serialDevUpdate','refreshPort','selectPort','portConnected','portClosed','selectBoard']);
        this.state = {
            portDev: [],
            boards:[{'name':'Arduino Uno','type':'uno'},{'name':'Nano 328p','type':'nano:cpu=atmega328'}],
            connectedPort: null,
            selectedBoard:{'name':'Arduino Uno','type':'uno'}
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
    portClosed(){
        this.setState({connectedPort:null});

    }
    selectPort(port){
        console.log("connect to port "+JSON.stringify(port));
        if(port.type=='disconnect'){
            this.props.kb.disonnectPort();
        }else{
            // check if plugin has on Recv method
            if('onRecv' in this.props.kb.plugin){
                var onRecv = this.props.kb.plugin.onRecv;
                this.props.kb.connectPort(port,this.portConnected,this.props.portReadLine,this.portClosed,onRecv);
            }else{
                this.props.kb.connectPort(port,this.portConnected,this.props.portReadLine,this.portClosed);
            }

        }
    }
    selectBoard(board){
        this.props.kb.selectBoard(board);
        this.setState({selectedBoard:board});
    }

    componentDidMount () {
        this.refreshPort();
    }

    render () {
        const {
            kb,
            portReadLine,
            ...props
        } = this.props;
        return (
            <HeaderBarComponent
                serialDev={this.state.portDev}
                boards={this.state.boards}
                refreshPort={this.refreshPort}
                selectPort={this.selectPort}
                selectBoard={this.selectBoard}
                toggleArduinoPanel={this.props.toggleArduinoPanel}
                toggleStage={this.props.toggleStage}
                openSetupModal={this.props.openSetupModal}
                connectedPort={this.state.connectedPort}
                selectedBoard={this.state.selectedBoard}
                openLoadProjectDialog={this.props.openLoadProjectDialog}
                openSaveProjectDialog={this.props.openSaveProjectDialog}
                {...props}
            />
        );
    }

}

HeaderBar.propTypes = {
    kb: React.PropTypes.instanceOf(KittenBlock)
};

module.exports = HeaderBar;


