import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

export default class Team extends Component {
    render() {
    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Jennifer Nguyen</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Project Manager
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Bruce Lin</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Architecture Design
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg yt-ic">
                <MDBIcon fab icon="youtube" />
              </a>
              <a href="#!" className="p-2 fa-lg ins-ic">
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Nhat Trinh</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Web Developer
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Truc Vo</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg gplus-ic">
                <MDBIcon fab icon="google-plus-g" />
              </a>
              <a href="#!" className="p-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="p-2 fa-lg email-ic">
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}

}