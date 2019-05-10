import React, {Component} from "react";
import { MDBRow, MDBCol, MDBMedia, MDBView, MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';
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
        this.setState({ profile: res.data.user });
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

      return subjects.join(', ');
    }

    return 'N/A';
  }

  render(){
    var { profile } = this.state;

    if (profile)
      return (
      <div style={{backgroundImage: 'linear-gradient(white 50%, #b9e4ea)'}}>
      <MDBContainer style={{paddingBottom: '30vh'}}>
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
                    { profile.schedule ?
                      <p className="font-weight-normal">
                        Mon: { profile.schedule.mon.start } - { profile.schedule.mon.end }
                        <br/>
                        Tues: { profile.schedule.tue.start } - { profile.schedule.tue.end }
                        <br/>
                        Wed: { profile.schedule.wed.start } - { profile.schedule.wed.end }
                        <br/>
                        Thurs: { profile.schedule.thu.start } - { profile.schedule.thu.end }
                        <br/>
                        Fri: { profile.schedule.fri.start } - { profile.schedule.fri.end }
                        <br/>
                        Sat: { profile.schedule.sat.start } - { profile.schedule.sat.end }
                        <br/>
                        Sun: { profile.schedule.sun.start } - { profile.schedule.sun.end }
                        <br/>
                      </p> : 'Schedule Not Uploaded' }
                  <MDBRow>
                  <Booking
                    tutor_id={ profile._id }
                  />
                  </MDBRow>
                  </MDBCol>
            </MDBRow>
          </MDBCol>
          </MDBRow>


      </MDBContainer>
      </div>
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
    width: '300px',
    height:'300px'
  }}
