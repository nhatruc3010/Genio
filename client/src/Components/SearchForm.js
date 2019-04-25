import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn,
         MDBInput,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter } from 'mdbreact';



  export default class SearchForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
          changingText: 'Results.',
          subject: '',
          submitted: false
      };

      this.textArray = ['Results.', 'Grades.', 'Learning.'];
      this.interval = null;
  }

 handleChange = event => {
      let { name, value } = event.target;
      this.setState({ [name]: value });
 }

 onSubmit = event => {
      event.preventDefault();
      let {subject } = this.state;

      this.props.search(subject);
      this.setState({ submitted: true });
 }

  componentDidMount() {
      var i = 0;
      this.interval = setInterval(() => {
          this.setState({ changingText: this.textArray[i++] });
          if (i === this.textArray.length)
              i = 0;
      }, 1500)
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

render() {
  if (this.state.submitted)
      return( <Redirect to='/reservation' /> );
  else
      return(
          <MDBContainer className="text-block">
              <br/>
              <h2 className="titlesearch"> Better Teaching Better {this.state.changingText}</h2>
              <br/>
              <Form className="form-wrapper" onSubmit={this.onSubmit}>
                  <MDBRow>
                      <MDBCol sm="12">
                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Input style={{color: 'black'}}value={this.state.subject} onChange={this.handleChange} name="subject" className="search-subject" bsSize="lg" placeholder="Enter Subject" />
                          </FormGroup>
                      </MDBCol>
                  </MDBRow>



                  <MDBBtn type="submit" className="search-button" style={styles.button}
                 color='cyan darken-2'>Search</MDBBtn>
              </Form>
          </MDBContainer>
      );
  }
  }

  const styles = {
    button:{
      font: ' bold 16px Economica',
      color: 'black',

    }
  }
