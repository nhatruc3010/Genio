import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

export default class Team extends Component {
    render() {
    return (
      <MDBContainer>
        <h2 className="h1-responsive text-center font-weight-bold my-5">
          Our Amazing Team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Genio is a team of four. We have a project manager, a front-end developer, a full-stack developer, and a machine learning developer.
        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src= {require("./img/Jenn.jpg")}
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
                Jennifer keeps the whole team on track. She always reminds us the coming assignments due and schedules the meetings. Jennifer also does the front-end work and improves the functions.
              </p>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src={require("./img/Bruce.jpg")}
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Bruce Lin</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Machine Learning Developer
              </h6>
              <p className="grey-text">
                Bruce helps does the research on how to develop the book recommender. He is passionate about the field of machine learnig and he wants to make sure the recommender works well.
              </p>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src={require("./img/Nhat.jpg")}
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Nhat Trinh</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Full-Stack Developer
              </h6>
              <p className="grey-text">
                Nhat is our connection developer who is experienced with front-end and back-end development. He also decides the tech stack for the whole team.
              </p>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src={require("./img/Truc.jpg")}
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
                Truc is passionate about design. She helps with the UI and UX in Genio. Truc also has a good hand of the userflow and what the users would love to see.
              </p>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}

}