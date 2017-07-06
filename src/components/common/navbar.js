
import React, {PropTypes} from 'react';  
import {Nav, NavItem, PageHeader, Grid, Row, Button, Navbar, NavDropdown, MenuItem, } from 'react-bootstrap';
import { Route, Router,browserHistory,IndexRoute } from 'react-router';  

export default class Nave extends React.Component {

 constructor(){
        super();
         this.logout = this.logout.bind(this);
    }


    logout(event) {
        event.preventDefault();
       browserHistory.push('/')  
    }



    render() {
           return (
       
<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">HSBC</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Home</NavItem>
      <NavItem eventKey={2} href="#">Documents</NavItem>
      <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Settings</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={this.logout} eventKey={3.4}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
   
        )
    }
}