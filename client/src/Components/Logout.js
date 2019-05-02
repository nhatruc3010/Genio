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


          userLogout(e){
        e.preventDefault();
        this.props.logout();
        this.setState({
          isLoggedIn:false
        })
      }


          static getDerivedStateFromProps(props, state) {
               if (state.user !== props.user){
                 return {
                   user: props.user
                 };
               }
               return null;
             }

  render() {
    return (
    <MDBContainer>
      <MDBBtn onClick={this.userLogout.bind(this)}
              outline rounded
              color='cyan darken-2'
              style={styles.button}
              >
              LOGOUT
      </MDBBtn>

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

const mapStateToProps = state => {
  return {
      user: state.auth.user
  };
}

export  default connect(mapStateToProps, {logout})(Login)
