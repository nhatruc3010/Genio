import React, { Component } from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class Home extends Component{
  constructor(props) {
    super(props);
   
  }
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
                        <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                        GENIO
                        </h3>
                        <hr className="my-17 w-75" style={styles.hr}/>
                        <h4 className="subtext-header mt-2 mb-4">
                            People teach. People learn.This is where people connect.<br/>
                            Being smart is great. <br/>
                        </h4>
                        <MDBBtn outline rounded color='cyan darken-2'
                                style={styles.button}>
                        APPLY TO BECOME A TUTEE !
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

        <btn
                onClick={this.handleViewMoreClick} 
                className="text-center" >
                <i className="fas fa-chevron-down black-text"></i>
        </btn>
      </div>
    );
  }
}

const styles = {
  homeStyle: {
    height: '100vh',
    textAlign: 'center',
    fontFamily:'Economica',
  },
  content: {
      paddingTop:'25vh',
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