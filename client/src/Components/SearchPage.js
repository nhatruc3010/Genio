import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import SearchForm from './SearchForm';
import '../App.css';
import {MDBContainer,
        MDBRow,
        MDBCol } from "mdbreact";



  export default class SearchPage extends Component {
    constructor(props) {
      super(props);
      this.state={};
    }

      render(){
        return(
          <div>
            <div className="background-image" style={ styles.homeStyle }>

            <MDBContainer className="px-md-3 px-sm-0">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 black-text text-center">
                        <SearchForm/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>



            </div>

          </div>
        );
      }
    }

    const styles = {
      homeStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0px',
        paddingTop: '20vh',
        overflowY: 'hidden'
      },
      hr:{
          backgroundColor: '#d3a13b',
          border: '3px solid #d3a13b',
          borderRadius: '2px',
          width: '50%',
          textAlign: 'center',


      },
    }
