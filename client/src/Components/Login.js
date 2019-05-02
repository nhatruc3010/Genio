import React, {Component} from "react";
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn,
         MDBInput,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter } from 'mdbreact';

export default class Login extends Component {
  state = {
    modal: false
  }

  toggle = () => {
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
              LOG IN
      </MDBBtn>

      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>SIGN IN </MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
          <MDBCol >
            <form>
              <div className="grey-text">
                
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
        
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                />
              </div>
              <h5>
              <a href = "/termandcondition" > Forget password?</a></h5>
              <div className="text-center">
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn onClick={this.toggle}
                    outline rounded
                    color='cyan darken-2'
                    style={styles.button}>
              Sign In
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
