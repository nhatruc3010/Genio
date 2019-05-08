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
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/auth';

class Login extends Component {
  state = {
    modal: false,
    email:'',
    password: '',
    isLoggedIn: false,
    user:{}
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.user){
      return {
        ...state,
        user: props.user
      };
    }
    return null;
  }


    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });

      }

      userLogin (e) {
        e.preventDefault();
           this.props.login({
             email: this.state.email,
             password: this.state.password
           }, (err) => {
            if(err) {
              this.setState({ error: true})
            } else {
              this.setState({
                modal: !this.state.modal,
                isLoggedIn: true
              });
            }
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
                  name="email"
                  onChange={this.handleChange}
                />

                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  name="password"
                  validate
                  onChange={this.handleChange}
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
          <MDBBtn onClick={this.userLogin.bind(this)}
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
    color: 'black',
    zIndex: '100'
  }
}

const mapStateToProps = state => {
  return {
      user: state.auth.user
  };
}

export  default connect(mapStateToProps, {login, logout})(Login)
