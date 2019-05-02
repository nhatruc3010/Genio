import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBModal,
MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';
import { connect } from 'react-redux';
import { register } from './redux/actions/auth';

class TutorSignUp extends Component {
  state = {
    modal: false,
    name:'',
    registerEmail: '',
    registerPassword: '',
    comfirmEmail: '',
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });

}

  userRegister (e) {
      e.preventDefault();
         this.props.register({
           email: this.state.registerEmail,
           password: this.state.registerPassword,
           name: this.state.name,
           type: "tutor"
         });
         this.setState({
           modal: !this.state.modal
         });
    }

  render() {
    return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}
              outline rounded
              color='cyan darken-2'
              style={styles.button}
              >
        APPLY TO BECOME A TUTOR !
      </MDBBtn>

      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>APPLY TO BECOME A TUTOR</MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
          <MDBCol >
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="name"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="registerEmail"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Confirm your email"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="confirmEmail"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  name="registerPassword"
                  validate
                  onChange={this.handleChange}
                />
              </div>
              <h5>
              By creating this account, you agree to our
              <a href = "/termandcondition" > Terms & Condintions</a></h5>
              <div className="text-center">
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn onClick={this.userRegister.bind(this)}
                    outline rounded
                    color='cyan darken-2'
                    style={styles.button}>
              Register
          </MDBBtn>
          <MDBBtn onClick={this.toggle}
                  outline rounded
                  color='cyan darken-2'
                  style={styles.button}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

}
const styles = {
  button:{
    font: ' bold 20px Economica',
    color: 'black'
  }
}

export  default connect(null, {register})(TutorSignUp)
