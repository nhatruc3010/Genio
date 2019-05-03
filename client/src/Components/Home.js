import React, { Component } from 'react';
import {MDBContainer,
        MDBRow,
        MDBCol } from "mdbreact";
import { Redirect } from 'react-router-dom';
import Advertising from './Advertising';
import Team from './Team';
import TuteeSignup from './TuteeSignUp';
import TutorSignup from './TutorSignUp';
import { connect } from 'react-redux';
import '../App.css';
import { style } from 'react-toastify';

class Home extends Component{
  state={};
  handleViewMoreClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
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

  render(){
    if(!this.state.user){
    return(
      <div>
        <div className = "home-background">
          <div style = {styles.homeStyle}>
          <div style = {styles.content}>
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 black-text text-left">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">GENIO</h3>
                  <hr style={styles.hr}/>
                  <h4 className="subtext-header mt-2 mb-4">
                    Genio is where we create a smart community.<br/>
                    You can choose to be a tutor, a tutee, or both!<br/>
                  </h4>
                  <TuteeSignup/>
                  <TutorSignup/>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          </div>
        </div>

        <div className="text-center">
            <btn style={styles.button}
              onClick={this.handleViewMoreClick}
              className="text-center" >
              <i className="fas fa-chevron-down black-text"></i>
            </btn>
        </div>

        <div>
          <Advertising/>
        </div>

        <div>
          <Team/>
        </div>

      </div>
    );
  }
  else if (this.state.user.type==="tutee"){
      return( <Redirect to='/search' /> );
  }
  else{
    return(<Redirect to='/tutoredit' /> );
  }
  }
}

const styles = {
  homeStyle: {
    textAlign: 'left',
    fontFamily:'Economica',
  },
  content: {
      paddingTop:'20vh',
      paddingBottom: '20vh',
      position: 'inline-block',
  },
  hr:{
      backgroundColor: '#d3a13b',
      border: '3px solid #d3a13b',
      borderRadius: '2px',
      width: '25%',
      textAlign: 'left',
      marginLeft: '0',

  },
  button:{
    font: ' bold 20px Economica',
    color: 'black',
  }
}


const mapStateToProps = state => {
  return {
      user: state.auth.user
  };
}

export  default connect(mapStateToProps)(Home)
