import React, {Component} from "react";
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";



  export default class TuteeSignIn extends Component {

    render() {
      return (
        <div>

            <MDBContainer className="px-md-3 px-sm-0">
            <div style={styles.homeStyle}>
                <MDBRow>
                    <MDBCol md="12" className="mb-4 black-text text-center">
                        <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                        GENIO
                        </h3>
                        <hr className="my-17 w-75" style={styles.hr}/>

                        </MDBCol>
                    </MDBRow>
  </div>
                    </MDBContainer>



            <MDBContainer>
            <div style={styles.signStyle}>
   <MDBRow>
     <MDBCol md="6">
       <form>
         <p className="h5 text-center mb-4">Sign in</p>
         <div className="grey-text">
           <MDBInput
             label="Type your email"
             icon="envelope"
             group
             type="email"
             validate
             error="wrong"
             success="right"
           />
           <MDBInput
             label="Type your password"
             icon="lock"
             group
             type="password"
             validate
           />
         </div>
         <div className="text-center">
           <MDBBtn outline rounded color='cyan darken-2'
                   style={styles.button}>Sign In</MDBBtn>
         </div>
       </form>
     </MDBCol>
   </MDBRow>
   </div>
 </MDBContainer>

        </div>
      );
    }
  }


  const styles = {
    homeStyle: {
      textAlign: 'center',
      fontFamily:'Economica',
    },
    hr:{
        backgroundColor: '#d3a13b',
        border: '3px solid #d3a13b',
        borderRadius: '2px'

    },
    button:{
      font: ' bold 15px Economica',
      color: 'black'
    },
    signStyle:{
      margin: 'auto'

    }
  }
