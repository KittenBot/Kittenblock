const React = require('react');
const logo = require('../media/logo.png');
import { Navbar,Nav,NavItem,ButtonGroup,Button,DropdownButton,FormControl } from 'react-bootstrap';

const HeaderBarComponent = function (props) {
    const {
        ...componentProps
    } = props;
    return (
        <Navbar
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#0099CC',
                backgroundImage:'url()',
                height: '45px'
            }}
            {...componentProps}
            fixedTop
            fluid
        >
            <Navbar.Header
                style={{paddingTop:'5px'}}
            >
                <a><img src={logo} alt="..." className="img-rounded" style={{height: '35px'}} id="kittenlogo" /></a>
            </Navbar.Header>
            <Nav>
            <NavItem >
                <ButtonGroup >
                    <DropdownButton title={"Arduino Uno"} bsStyle="warning" id="boardDropdown" style={{width:'150px'}}>

                    </DropdownButton>
                </ButtonGroup>
            </NavItem>
            <NavItem>
            <ButtonGroup>
                <DropdownButton title={"Not Connected"} bsStyle="success" id="portDropdown" style={{width:'150px'}} >

                </DropdownButton>
            </ButtonGroup>
            </NavItem>
            <NavItem>
            <FormControl
                type="text"
                placeholder="Porject Title"
                style={{
                    width: '200px',
                    backgroundColor: '#0b6684',
                    border: '0px',
                    color: '#FFFFFF'
                }}
            />
            </NavItem>
            </Nav>
        </Navbar>
    );
};


module.exports = HeaderBarComponent;
