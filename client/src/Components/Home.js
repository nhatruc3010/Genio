import React, { Component } from 'react';
import {MDBContainer,
        MDBRow,
        MDBCol } from "mdbreact";

import Advertising from './Advertising';
import Team from './Team';
import TuteeSignup from './TuteeSignUp';
import TutorSignup from './TutorSignUp';

export default class Home extends Component{
  handleViewMoreClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
        });
    }

  render(){
    return(
      <div style = {styles.homeStyle}>
        <div style = {styles.content}>
          <MDBContainer className="px-md-3 px-sm-0">
            <MDBRow>
              <MDBCol md="12" className="mb-4 black-text text-center">
                <h3 className="display-3 font-weight-bold mb-0 pt-md-5">GENIO</h3>
                <hr className="my-17 w-75" style={styles.hr}/>
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

        <btn
            onClick={this.handleViewMoreClick}
            className="text-center" >
            <i className="fas fa-chevron-down black-text"></i>
        </btn>

        <div>
          <Advertising/>
        </div>
        
        <div>
          <Team/>
        </div>
      </div>
    );
  }
}

const styles = {
  homeStyle: {
    textAlign: 'center',
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
      borderRadius: '2px'
  },
  button:{
    font: ' bold 20px Economica',
    color: 'black'
  }
}
