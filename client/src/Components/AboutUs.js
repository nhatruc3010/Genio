import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

export default class AboutUs extends Component {
    render() {  
        return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our Story
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          Genio is a senior project course in San Jose State University. The name "Genio" is the Italian word, Genius.
          We are a group of four students who are passionate about education for our younger generation.
          We value the balance between taking and giving. Therefore, we devlope the platform, Genio, where the people are
          able to register as a tutor, a student, or both.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src={require("./img/gate.jpg")}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="university" size="2x" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Tutoring</h5>
                <p className="grey-text">
                  We believe in giving out to others benefits both side. The tutors also learn the valueable
                  experiences.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="user-graduate" size="2x" className="pink-text"/>
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Learning</h5>
                <p className="grey-text">
                  We believe in learning is a life-long journey. The students can choose the tutors as they browse.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Communication</h5>
                <p className="grey-text">
                  We believe communication would be am important element in education, starting from K-12 education.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        
      </section>
  );
}
}
