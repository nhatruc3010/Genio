import React, { Component } from 'react';
import {Form, FormGroup, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { getAllTutors } from './redux/actions/auth';



class SearchForm extends Component {

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
      let { subject } = this.state;

      this.props.getAllTutors(subject);
      this.setState({ submitted: true });
 }


     static getDerivedStateFromProps(props, state){
         if(props.tutors !== state.tutors){
             return{
                 ...state,
                 tutors: props.tutors
             }
         }
         return null;
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
      return( <Redirect to='/searchresults' /> );
  else
      return(
          <MDBContainer className="text-block">
              <br/>
              <h2 className="titlesearch"> Better Teaching Better {this.state.changingText}</h2>
              <br/>
              <br/>
              <Form className="form-wrapper" onSubmit={this.onSubmit}>
                  <MDBRow>
                      <MDBCol sm="12">
                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Input style={{color: 'black'}}value={this.state.subject} onChange={this.handleChange} name="subject" className="search-subject" bsSize="lg" placeholder="Enter Subject" />
                              <br/>
                              <MDBBtn type="submit" className="search-button" style={styles.button}>Search</MDBBtn>
                          </FormGroup>
                      </MDBCol>
                  </MDBRow>

              </Form>
          </MDBContainer>
      );
  }
  }

  const styles = {
    button:{
      font: ' bold 16px Economica',
      color: 'white',
      backgroundImage: 'linear-gradient(#ff7043, #ff8c17)'

    }
  }

  const mapStateToProps = state => {
      return {
          tutors: state.data.tutors
      };
  };

  export default connect(mapStateToProps, { getAllTutors })(SearchForm);
