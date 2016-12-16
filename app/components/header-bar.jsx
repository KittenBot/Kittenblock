const React = require('react');
const logo = require('../media/logo.png');

import { Navbar,Nav,NavItem,ButtonGroup,Button,DropdownButton,FormControl,MenuItem  } from 'react-bootstrap';
import {Icon} from 'react-fa';

class HeaderBarComponent extends React.Component {
    render() {
        const {
            serialDev,
            refreshPort,
            selectPort,
            toggleArduinoPanel,
            toggleStage,
            connectedPort,
            ...componentProps
        } = this.props;
        var portMenuItem;
        if(this.props.connectedPort!=null){
            portMenuItem =
                <MenuItem eventKey={{
                    'path': this.props.connectedPort,
                    'type': 'disconnect'
                }} key={this.props.connectedPor}>Disconnect</MenuItem>

        }else{
            portMenuItem =
                    serialDev.map(dev => (
                    <MenuItem eventKey={{
                        'path': dev.path,
                        'type': dev.type
                    }} key={dev.path}>{dev.path}</MenuItem>
                ))
        }
        return (
            <Navbar
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#0099CC',
                    backgroundImage: 'url()',
                    height: '45px'
                }}
                {...componentProps}
                fixedTop
                fluid
            >
                <Navbar.Header
                    style={{paddingTop: '5px'}}
                >
                    <a><img src={logo} alt="..." className="img-rounded" style={{height: '35px'}} id="kittenlogo"/></a>
                </Navbar.Header>
                <Nav>
                    <NavItem >
                        <ButtonGroup >
                            <DropdownButton title={"Arduino Uno"} bsStyle="warning" id="boardDropdown"
                                            style={{width: '150px'}}>

                            </DropdownButton>
                        </ButtonGroup>
                    </NavItem>
                    <NavItem>
                        <ButtonGroup>
                            <DropdownButton title={"Not Connected"} bsStyle="success"
                                            onClick={refreshPort}
                                            onSelect={selectPort}
                                            id="portDropdown"
                                            style={{width: '150px'}}>{
                                portMenuItem
                            }
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
                <Nav pullRight>
                    <NavItem>
                        <Button bsStyle="warning">Examples</Button>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning"
                                onClick={toggleStage}
                        >Stage</Button>
                    </NavItem>
                    <NavItem>
                        <ButtonGroup>
                            <DropdownButton title="Project" bsStyle="warning" id="projDropdown">
                                <MenuItem eventKey="1">New</MenuItem>
                                <MenuItem eventKey="2">Save</MenuItem>
                                <MenuItem eventKey="3">Load</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning"
                                onClick={toggleArduinoPanel}
                        >Arduino</Button>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning">
                            <Icon name="gear"/>
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
};


module.exports = HeaderBarComponent;
