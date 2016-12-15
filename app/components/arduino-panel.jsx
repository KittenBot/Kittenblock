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
                    top: 45,
                    bottom: 8,
                    backgroundColor: '#0097a7'
                }}
            >
            <div className="group" id="code-buttons">
                <Button>Default</Button>

            </div>

            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


