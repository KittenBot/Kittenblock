const React = require('react');
import {Button} from 'react-bootstrap';

class ArduinoPanelComponent extends React.Component {
    render() {
        const {
            ...componentProps
        } = this.props;
        var visible = this.props.visible?'block':'none';
        return (<div
                style={{
                    position: 'absolute',
                    display: visible,
                    right: 0,
                    width: 500,
                    top: 80,
                    bottom: 8,
                    backgroundColor: '#0097a7'
                }}
            >
            <div className="group" id="code-buttons" style={{top:4,left:4,width:480,position:'absolute'}}>
                <Button style={{marginLeft:5,height:34}}><input type="checkbox"/>Translate</Button>
                <Button style={{marginLeft:5}}>Restore</Button>
                <Button style={{marginLeft:5}}>Upload</Button>
                <Button style={{float:'right'}}>Open with arduino</Button>
            </div>

            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


