const React = require('react');
import {Button} from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/eclipse';

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
            <AceEditor
                style={{top:45,left:2,height:450}}
                mode="c_cpp"
                theme="eclipse"
                name="arduino-code"
                editorProps={{$blockScrolling: true}}
            />,
            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


