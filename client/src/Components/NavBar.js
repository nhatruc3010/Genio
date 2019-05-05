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
import Logout from './Logout'
import { connect } from 'react-redux';

class NavBar extends Component {
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


    static getDerivedStateFromProps(props, state) {
         if (state.user !== props.user){
           return {
             user: props.user
           };
         }
         return null;
       }

    render() {
      if(!this.state.user){
      return (
        <div>
          <Navbar style ={styles.navBackground} expand="md" className="center">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavbarBrand>
                  <NavLink style={styles.logo} href="/">Genio</NavLink>
              </NavbarBrand>
              <Nav className="d-md-flex d-block ml-auto mx-0">
                <NavItem>
                  <NavLink style={styles.item} href="/about-us/">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/contact/">CONTACT</NavLink>
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
    else{
      return(
        <div>
          <Navbar style ={styles.navBackground} expand="md" className="center">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavbarBrand>
                  <NavLink style={styles.logo} href="/">Genio</NavLink>
              </NavbarBrand>
              <Nav className="d-md-flex d-block ml-auto mx-0">
                <NavItem>
                  <NavLink style={styles.item} href="/about-us/">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.item} href="/contact/">CONTACT</NavLink>
                </NavItem>
                {this.state.user.type==="tutee"? <NavItem>
                  <NavLink style={styles.item} href="/studentprofile/">PROFILE</NavLink>
                </NavItem>: <React.Fragment><NavItem>
                  <NavLink style={styles.item} href="/tutoredit/">PROFILE</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink style={styles.item} href="/tutorsession/">SESSIONS</NavLink>
                </NavItem>
                </React.Fragment>

                }
              </Nav>
              <Nav className="ml">
              <NavItem>
                    <Logout/>
              </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>


      );
    }
    }
  }

  const styles = {
    navBackground:{
      backgroundColor: '#white',
      height: '80px',
      textAlign: 'center',
      boxShadow:'none',
    },
    logo:{
      color: 'black ',
      font: ' bold 50px Great Vibes',
      marginRight: '50px',
      marginLeft: '50px'
    },
    item:{
        color: '#00acc1 ',
        font: ' bold 25px Economica',
        marginRight: '50px',
        marginLeft: '50px'
    }
  }

  const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
  }

export  default connect(mapStateToProps)(NavBar)
