import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class FooterPagePro extends Component{
    render(){
        return(
    <MDBFooter style={styles.footer} className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/aboutus" style={{color:'black'}}>About</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/contact" style={{color:'black'}}>Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="my-17 w-75" style={styles.hr}/>
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Genio makes our best efforts to our children's community. We value the
              education and the quality of it. Let us make the imapcts together to
              our next generation.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-black-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg black-text mr-md-4"></i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg black-text mr-md-4"></i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg black-text mr-md-4"></i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg black-text mr-md-4"></i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg black-text mr-md-4"></i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg black-text"></i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Genio &copy; {new Date().getFullYear()} Copyright:
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
}
const styles = {
    footer: {
      textAlign: 'center',
      fontFamily:'Economica',
      backgroundColor: '#b4dfe5ff',
      color: 'black'
    },
    hr:{
        backgroundColor: '#d3a13b',
        border: '1px solid #d3a13b',
        borderRadius: '2px'
    },
}