import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink} from "mdbreact";

export default () => (
  <BrowserRouter>
          <MDBNav style ={styles.background} className="font-weight-bold justify-content-center ">
            <MDBNavLink className="black-text" active to="#!">GENIO</MDBNavLink>
            <MDBNavLink className="black-text" to="#!">SPONSOR</MDBNavLink>
            <MDBNavLink className="black-text" to="#!">CONTACT</MDBNavLink>
          </MDBNav>
  </BrowserRouter>
);

const styles = {
  background:{
    backgroundColor: '#b4dfe5ff',
    height: '50px',
    textAlign: ' center',

  }
}