import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

export default class Advertising extends Component {
    render() {
        return (
            <MDBContainer>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Why Genio?
                </h2>
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    Teach - Simply sign up to be a tutor and start to teach others.<br/>
                    Learn - Nevigate and explore the tutors based on the subjects<br/>
                    Read - We have a recommneded book reading list, just for you.<br/>
                </p>

                <MDBRow>
                    <MDBCol lg="5" className="text-center text-lg-left">
                        <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                        alt=""
                        />
                    </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Teach</h5>
                        <p className="grey-text">
                            Genio is a platform where you can sign up as a tutor. You can be the tutor teaching others and earning the experiences. Meanwhile, you also benefit financially.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Learn</h5>
                            <p className="grey-text">
                                Genio is also a platfor for the learners to find the suitable tutors based on interests and subjects. Explore our tutors.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Read</h5>
                            <p className="grey-text">
                                Genio encourages the reading habit developed in our young generation. We use our machine learning model to suggest your next read.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
  );
}
}
