const React = require('react');
import {Button} from 'react-bootstrap';

class ArduinoPanelComponent extends React.Component {
    render() {
        const {
            ...componentProps
        } = this.props;
        return (<div>
            <div className="group" id="code-buttons">
                <Button>Default</Button>

            </div>

            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


