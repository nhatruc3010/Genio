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
import Login from './Login'

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
          <Navbar style ={styles.background} expand="md" className="center">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavbarBrand>
                  <NavLink style={styles.item} href="/">GENIO</NavLink>
              </NavbarBrand>
              <Nav className="d-md-flex d-block mx-md-auto mx-0">
                <NavItem>
                  <NavLink style={styles.item} href="/about-us/">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/details/">DETAILS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/contact/">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/help/">HELP</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml">
              <NavItem>
                  <Login/>
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
        marginLeft: '50px'
    }
  }
