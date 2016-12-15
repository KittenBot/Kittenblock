const React = require('react');
const logo = require('../media/logo.png');
import { Navbar,Nav,NavItem } from 'react-bootstrap';



class EditorTabsComponent extends React.Component {
    handleSelect (eventKey) {
        console.log("Editory tab:"+eventKey);
    }
    render()
    {
        const {
            showStage,
            ...props
        } = this.props;
        var leftPos=showStage?500:0;
        return (
            <Nav bsStyle="tabs" activeKey="1"
                 style={{
                     position: 'absolute',
                     top: 50,
                     left: leftPos
                 }}
                 onSelect={this.handleSelect}
                 className="editor-tabs"
            >
                <NavItem eventKey="1" title="Script" style={{width:83.3}}>Script</NavItem>
                <NavItem eventKey="2" title="Costumes" style={{width:83.3}}>Costumes</NavItem>
                <NavItem eventKey="3" title="Sounds" style={{width:83.3}}>Sounds</NavItem>
            </Nav>
        );
    }
};


module.exports = EditorTabsComponent;

