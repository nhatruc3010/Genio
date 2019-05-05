import React, {Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBMedia, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';
import queryString from 'query-string';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Booking from './Booking';
import 'react-dates/lib/css/_datepicker.css';

export default class TutorProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      profile: null
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/profile/${this.props.history.location.pathname.split('/')[2]}`)
      .then(res => {
        this.setState({ profile: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderSubjects(tutor) {
    if (tutor.subjects) {
      let subjects = [];

      Object.keys(tutor.subjects).forEach((v,i) => {
          if (tutor.subjects[v] === true)
              subjects.push(v);
      });
      
      return subjects.join(',');
    }
    
    return 'N/A';
  }

  render(){
    var { profile } = this.state;
    console.log(profile);
    
    if (profile)
      return (
      <MDBContainer>
          <MDBRow>
          <MDBCol md="12">
            <h1 className="h1-responsive font-weight-bold text-center my-5">Tutor Profile</h1>
            <MDBRow>
              <MDBCol md="4">
                      <MDBView >
                        <h3 className="font-weight-bold mt-2" >{ profile.name }</h3>
                        <img
                          src="https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024"
                          alt=""
                          style={styles.imageStyles}
                        />

                        <p style={{fontSize: "23px"}}><a className="font-weight-bold">Hourly Rate:</a> ${ profile.hourly_rate }</p>
                      </MDBView>


              </MDBCol>
              <MDBCol md="6">
              <h6 className="font-weight-bold my-3">
                    Subjects:
                  </h6>
                  <p className="font-weight-normal">
                    { this.renderSubjects(profile) }

                  </p>

                <h6 className="font-weight-bold my-3">
                    About Me
                  </h6>
                  <p className="font-weight-normal">
                    { profile.about_me }

                  </p>

                  <h6 className="font-weight-bold my-3">
                      Availability:
                    </h6>
                    <p className="font-weight-normal">
                    Mon: Unavailable
                    <br/>
                    Tues: 10:00 AM - 04:00 PM
                    <br/>
                    Wed: 5:00 PM - 08:00 PM
                    <br/>
                    Thurs: 10:00 AM - 04:00 PM
                    <br/>
                    Fri: 07:00 AM - 09:00 PM
                    <br/>
                    Sat: Unavailable
                    <br/>
                    Sunday: Unavailable
                    <br/>
                    </p>


                  <MDBRow>



                  <Booking/>

                  </MDBRow>


                  </MDBCol>
            </MDBRow>
          </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol md="12">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
              Feedback
              </h2>



              <div className="form-area">
          <form role="form">
          <br styles="clear:both" />

          <div   style={{fontSize: "20px"}}>
          <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                    onStarClick={this.onStarClick.bind(this)}
                  />
            </div>


            <div className="form-group">
            <textarea className="form-control" type="textarea" id="subject" placeholder="Insert feedback..." maxlength="200" rows="2"></textarea>
            </div>
            <MDBBtn color="primary" size="md" id="sumbit">
            Post
            </MDBBtn>
          </form>
      </div>
      <br/>
      <br/>

              <MDBMedia style={{border:" 2px groove", padding: "25px", marginBottom: "20px"}}>
                  <MDBMedia left href="#" className="mr-3">
                  <MDBMedia object src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600108/29213218-stock-vector-female-avatar-silhouette-profile-pictures.jpg?ver=6" alt="Generic placeholder image" style={{width:"90px", height:"90px"}} />
                  </MDBMedia>

                  <MDBMedia body >
                      <MDBMedia heading>

                      <div   style={{fontSize: "20px"}}>
                      <StarRatingComponent
                              name="rate1"
                              starCount={5}
                              value={4}
                              editing={false}
                                renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                              onStarClick={this.onStarClick.bind(this)}
                            />
                      </div>

                      </MDBMedia>
                      I love Jessica! She is such a great tutor. I passed my class with flying colors!!!
                      <p>by <a href="#!" className="font-weight-bold">Truc Vo</a>, 04/22/2019</p>



                  </MDBMedia>
              </MDBMedia>



              <MDBMedia style={{border:"2px groove", padding: "25px", marginBottom: "20px"}}>
                  <MDBMedia left href="#" className="mr-3">
                  <MDBMedia object src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600108/29213218-stock-vector-female-avatar-silhouette-profile-pictures.jpg?ver=6" alt="Generic placeholder image" style={{width:"90px", height:"90px"}} />
                  </MDBMedia>

                  <MDBMedia body >
                      <MDBMedia heading>

                      <div   style={{fontSize: "20px"}}>
                      <StarRatingComponent
                              name="rate1"
                              starCount={5}
                              value={5}
                              editing={false}
                                renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                              onStarClick={this.onStarClick.bind(this)}
                            />
                      </div>


                      </MDBMedia>
                      Jessica is so great. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blahblah blah blah blah blahblah blah blah blah blahblah blah blah blah blah
                      <p>by <a href="#!" className="font-weight-bold">Truc Vo</a>, 04/22/2019</p>



                  </MDBMedia>
              </MDBMedia>


          </MDBCol>
          </MDBRow>
      </MDBContainer>
      );
    // else return <Redirect to="/" />
    else return null;
}
}

const styles ={
  imageStyles:{
    borderRadius: '50%',
    border: "#A9A9A9",
    marginBottom: '10px',
    width: '250px',
    height:'250px'
  }}
