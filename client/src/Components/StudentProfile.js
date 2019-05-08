import React, {Component} from "react";
import { MDBRow, MDBCol, MDBView, MDBBtn, MDBContainer} from "mdbreact";
import {Button, FormGroup, Label, Input } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import Booking from './Booking';
import Recommendation from './Recommender'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class StudentProfile extends Component {
  constructor(props){
    super(props);

    this.state={
        biology: false,
        chemistry: false,
        english: false,
        math: false,
        history: false,
        music: false,
        physic: false,
        rating: 0
    };

  }


static getDerivedStateFromProps(props, state) {
             if (state.user !== props.user){
               return {
                 user: props.user
               };
             }
             return null;
}


  onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
  }
  render(){
    if (!this.state.user) return <Redirect to="/" />

    return (

    <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <h1 className="h1-responsive font-weight-bold text-center my-5">Hi! Bruce Lin</h1>
          <MDBRow>
            <MDBCol md="6">
              <MDBView >
                  <img
                    src="https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024"
                    alt=""
                    style={styles.imageStyles}
                  />
                  <br/>
              <Button href="/studentsession" style={{marginLeft: "30%", backgroundImage: 'linear-gradient(#ff7043, #ff8c17)'}}> View Sessions </Button>
              <br/>
              <br/>
              <br/>

              </MDBView>
            </MDBCol>

            <MDBCol md="6">
              <h6 className="font-weight-bold my-3">Email:</h6>
              <p className="font-weight-normal">bruce.lin@sjsu.edu</p>

              <h6 className="font-weight-bold my-3">Phone:</h6>
              <p className="font-weight-normal">408 999 8888</p>

              <h6 className="font-weight-bold my-3">About Me:</h6>
              <FormGroup style ={styles.select}>
                <p className="font-weight-normal">
                  I'm looking for tutor, who willing to teach me
                </p>
                <Label for="exampleSelect">Grade</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>K-Kindergarden</option>
                  <option>1st Grade</option>
                  <option>2nd Grade</option>
                  <option>3rd Grade</option>
                  <option>4th Grade</option>
                  <option>5th Grade</option>
                  <option>6th Grade</option>
                  <option>7th Grade</option>
                  <option>8th Grade</option>
                  <option>9th Grade</option>
                  <option>10th Grade</option>
                  <option>11th Grade</option>
                  <option>12th Grade</option>
                </Input>
                <MDBBtn type="submit" style={styles.button}
                        outline rounded color='cyan darken-2' >Search</MDBBtn>
              </FormGroup>
            </MDBCol>
        </MDBRow>
      </MDBCol>

      <div>
        <Recommendation/>
      </div>
    </MDBRow>

      <div>
      <Button style={this.state.biology?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({biology: !this.state.biology})}>Biology</Button>
      <Button style={this.state.chemistry?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({chemistry: !this.state.chemistry})}>Chemistry</Button>
      <Button style={this.state.english?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({english: !this.state.english})}>English</Button>
      <Button style={this.state.history?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({history: !this.state.history})}>History</Button>
      <Button style={this.state.music?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({music: !this.state.music})}>Music</Button>
      <Button style={this.state.math?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({math: !this.state.math})}>Math</Button>
      <Button style={this.state.physic?  styles.activeStyle: styles.inactiveStyle}
              onClick={() => this.setState({physic: !this.state.physic})}>Physic</Button>
      </div>

      <MDBContainer>
      <div class="card" style={ styles.card}>
        <div class="row " style={ styles.rowcard}>
          <div class="col-md-4">
            <img  src="https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024" class="w-100" alt=""/>
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title">Jessica Tran</h4>
              </div>
              <p class="card-text">Have more than 3y years to teach student in Math</p>
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
              <div >
                <MDBBtn href="/tutorprofile"
                        style={styles.button}
                        color='cyan darken-2' > Details</MDBBtn>
                <Booking/>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style={ styles.card}>
        <div class="row " style={ styles.rowcard}>
          <div class="col-md-4">
            <img  src="https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024" class="w-100" alt=""/>
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title">Jessica Tran</h4>
              <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={this.state.rating}
                   renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </div>
              <p class="card-text">Have more than 3y years to teach student in Math</p>
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
              <div >
                <MDBBtn href="/tutorprofile"
                        style={styles.button}
                        color='cyan darken-2' > Details</MDBBtn>
                <Booking/>
              </div>
            </div>
          </div>
        </div>

      </MDBContainer>
  </MDBContainer>
);
}
}

const styles ={
  imageStyles:{
    borderRadius: '100%',
    border: "#A9A9A9",
    width: '300px',
    height:'300px',
    marginLeft: '100px',
  },
  select: {
    width: '20em',
    textAlign:'center',
  },
  activeStyle:{
    color: 'white',
    background: ' linear-gradient(to right, #d3a13b 30%, #F7BB97 100%)',
    borderColor: 'white',
    margin: '10px',
    font: ' bold 20px Economica'
  },
  inactiveStyle:{
    color: 'white',
    background: ' linear-gradient(to right, #b4dfe5ff 0%, #33cccc 100%)',
    borderColor: 'white',
    margin: '10px',
    font: ' bold 20px Economica'
  },
  card: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  rowcard: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px'
  },
  button:{
    font: ' bold 20px Economica',
    color: 'black'
  }
}
const mapStateToProps = state => {
  return {
      user: state.auth.user
  };
}

export  default connect(mapStateToProps)(StudentProfile)
