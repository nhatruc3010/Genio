import React, {Component} from "react";
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Button, Container, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


  export default class TuteeApp extends Component {
    constructor(props){
      super(props);
      this.state={
        confirmPassword:'',
    registerEmail: '',
    registerPassword: '',
    firstName:'',
    lastName:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    phoneNumber:''
      };

    }

    render() {
      return (
        <div  style = {styles.homeStyle}>

              <MDBContainer  className="px-md-3 px-sm-0">

              <MDBRow>
                  <MDBCol md="12" className="mb-4 black-text text-center">
                      <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                      GENIO
                      </h3>
                      <hr className="my-17 w-75" style={styles.hr}/>

                  </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBCol>
              <p className="h4 text-center py-4">Sign Up to Become a Tutee!</p>
              </MDBCol>
                </MDBRow>

          <Form>
                  <MDBRow>
                      <MDBCol size = '10'>

                          <Label for="exampleRegEmail">Email:</Label>
                          <Input type="email" name="registerEmail" value={this.state.registerEmail} placeholder="email@gmail.com" />

                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol size='5'>

                          <Label for="exampleRegPassword">Password:</Label>
                          <Input type="password" name="registerPassword" value={this.state.registerPassword} placeholder="Password" />

                      </MDBCol>

                      <MDBCol size='5'>

                          <Label for="exampleRegPassword">Confirm Password:</Label>
                          <Input type="password" name="confirmPassword" value={this.state.confirmPassword}  placeholder="Confirm Password" />

                      </MDBCol>
                  </MDBRow>

                  <MDBRow>
                      <MDBCol size='5'>

                              <Label for="exampleFirstName"> First Name:  </Label>
                              <Input type="text" name="firstName" value={this.state.firstName}  placeholder="John" />

                      </MDBCol>

                      <MDBCol size='5'>


                              <Label for="exampleLastName"> Last Name:  </Label>
                              <Input type="text" name="lastName" value={this.state.lastName} placeholder="Smith"/>

                      </MDBCol>
                  </MDBRow>

                  <MDBRow>
                      <MDBCol size='5'>


                              <Label for="exampleAddress"> Address:  </Label>
                              <Input type="text" name="address" value={this.state.address}  placeholder="1 Washington Square"/>

                      </MDBCol>

                      <MDBCol size='5'>


                              <Label for="exampleCity"> City:  </Label>
                              <Input type="text" name="city" value={this.state.city}  placeholder="San Jose"/>


                      </MDBCol>
                      <MDBCol size='5'>

                              <Label for="exampleState"> State:  </Label>
                              <Input type="text" name="state" value={this.state.state} placeholder="CA"/>

                      </MDBCol>

                      <MDBCol size='5'>

                              <Label for="exampleCity"> Zip Code:  </Label>
                              <Input type="text" name="zipcode" value={this.state.zipcode}   placeholder="95112"/>

                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol size='10'>

                              <Label for="exampleState"> Phone Number:  </Label>
                              <Input type="text" name="phoneNumber" value={this.state.phoneNumber}   placeholder="408-123-4553"/>

                      </MDBCol>
                  </MDBRow>

                  <MDBRow>
                  <MDBCol>
                  <FormGroup check>
                      <Label check className="term-condition">
                          <Input type="checkbox"/>{' '}

                          By creating this account, you agree to our <MDBBtn outline rounded color='cyan darken-2'
                                  style={styles.button} >Terms & Condintions</MDBBtn>

                      </Label>
                  </FormGroup>
                  </MDBCol>
                  </MDBRow>
                  </Form>


                  <MDBRow>
                  <MDBCol>
                  <MDBBtn outline rounded color='cyan darken-2'
                          style={styles.button} >Submit</MDBBtn>
                  </MDBCol>
                  </MDBRow>





                </MDBContainer>

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
    hr:{
        backgroundColor: '#d3a13b',
        border: '3px solid #d3a13b',
        borderRadius: '2px'

    },
    button:{
      font: ' bold 12px Economica',
      color: 'black'
    }
  }
