import React, {Component} from "react";
import {MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, 
         MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from "mdbreact";

export default class Recommender extends Component {

    render() {
        return (
    <MDBContainer style = {styles.text}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our recommendation 
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Take a look and choose which is the best for you.
        Let these books help you on studying.
      </p>
      <MDBCarousel
        activeItem={1}
        length={2}
        slide={true}
        showControls={true}
        showIndicators={true}
      >  
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321973615.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Physics</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Mastering Physics with Pearson Etext Student Access Code Card for University Physics</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321973615.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Physics</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Mastering Physics with Pearson Etext Student Access Code Card for University Physics</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321973615.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Physics</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Mastering Physics with Pearson Etext Student Access Code Card for University Physics</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
          </MDBContainer>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
        <MDBContainer>
          <MDBRow>
          <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www3.alibris-static.com/prentice-hall-biology/isbn/9780132013499_l.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Biology</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Prentice Hall Biology</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www3.alibris-static.com/prentice-hall-biology/isbn/9780132013499_l.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Biology</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Prentice Hall Biology</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol sm="4">
                <MDBCard narrow className="mb-2">
                  <MDBCardImage
                    top cascade
                    src="https://www3.alibris-static.com/prentice-hall-biology/isbn/9780132013499_l.jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Biology</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Prentice Hall Biology</a>
                      </strong>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
          </MDBContainer>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
}

const styles = {
    text: {
      fontFamily:'Economica',
      font: '24px Economica',
    },

  }