import React, {Component} from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';
  
  export default class NavBar extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar style ={styles.background} expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="d-md-flex d-block flex-row mx-md-auto mx-0">
                <NavItem>
                  <NavLink style={styles.item} href="/">GENIO</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/components/">SPONSOR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/contact/">CONTACT</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  const styles = {
    background:{
      backgroundColor: '#b4dfe5ff',
      height: '80px',
      textAlign: 'center',
    },
    item:{
        color: 'black',
        font: ' bold 20px Economica',
        marginRight: '50px',
        
    }
  }