import React, {Component} from "react";
import { MDBRow, MDBCol, MDBMedia, MDBView } from "mdbreact";
import { MDBContainer, Button } from "mdbreact";
import FileBase64 from 'react-file-base64';
import TimeRange from 'react-time-range';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { render} from 'react-dom';
import TimeRangeSlider from 'react-time-range-slider';
import { Redirect } from 'react-router-dom';

import { getUser } from '../redux/actions';

class TutorsPage extends Component {
  constructor(props) {
    super(props);
    this.featureRef = React.createRef();

    this.state = {
      rating: 0,
      isEditing: false,
      hourly_rate: null,
      about_me: '',
      address: '',
      profile_pic: '',
      file:'',
      biology: false,
      chemistry: false,
      math: false,
      english: false,
      music: false,
      physics: false,
      history: false,
      mon: {
          start: "00:00",
          end: "23:00"
      },
     tue: {
          start: "00:00",
          end: "23:00"
      },
      wed: {
          start: "00:00",
          end: "23:00"
      },
      thur: {
          start: "00:00",
          end: "23:00"
      },
      fri: {
          start: "00:00",
          end: "23:00"
      },
      sat: {
          start: "00:00",
          end: "23:00"
      },
       sun: {
          start: "00:00",
          end: "23:00"
        },
        monNA: false, tueNA: false, wedNA: false, thuNA: false, friNA: false, satNA: false, sunNA: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
      if (props.user !== state.user){
        if (props.user !== undefined && props.user) {
          let {hourly_rate, about_me, address, profile_pic } = props.user;
          return {
            ...state,
            user: props.user,
            ...props.user
          };
        } else {
          return {
            ...state,
            user: null
          }
        }
      }
      return null;
    }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
}


handleChange = event => {
  console.log(event)
  this.setState({
    [event.target.name]: event.target.value,
  });

}


handleTutorEditSubmit = () => {
  let { 
    chemistry, physics, english, math, history, music, biology,
    mon, tues, wed, thu, fri, sat, sun, user,
    monNA, tueNA, wedNA, thuNA, friNA, satNA, sunNA
   } = this.state;
  axios.post(
    'http://localhost:3001/profile/edit', { _id: user._id, data: {
      user : {
        profile_pic: this.state.file,
        address: this.state_address,
        about_me: this.state.about_me,
        hourly_rate: this.state.hourly_rate,
        subjects : {
          chemistry, physics, english, math, history, music, biology 
        },
        ...this.state.user
      },
      mon : monNA ? 'N/A' : mon, tues: tueNA ? 'N/A' : tueNA, wed: wedNA ? 'N/A' : wed, thu: thuNA ? 'N/A' : thu, fri: friNA ? 'N/A' : fri, sat: satNA ? 'N/A' : sat, sun: sunNA ? 'N/A' : sun,
    }})
    .then(res => {
      if(res.data.success) { 
        // this.setState({ isEditing: false });
        this.props.getUser(this.state.user._id);
      }
    })
    .catch(err => {
      alert(err);
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


renderProfileInfo() {
  return this.state.isEditing ?

    <MDBCol md="6">
        <div ><br/>
          <b>Upload New Image</b><br/><FileBase64 onDone={file => this.setState({ file: file.base64 })}/><br/><br/>
          <b>Hourly Rate</b><br/><input className="form-control" onChange={this.handleChange} name="hourly_rate" type="text" value={this.state.hourly_rate}/>
          <b>About Me</b><br/><textarea className="form-control" rows="10" onChange={this.handleChange} name="about_me" type="text" value={this.state.about_me}/><br/>
          <b>Address</b><br/><input className="form-control" onChange={this.handleChange} name="address" type="text" value={this.state.address}/><br/>

          <b>Subjects</b><br/>
            <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="biology"  checked={this.state.biology} onClick={() =>  this.setState({ biology: !this.state.biology })}/>
            <label class="custom-control-label" for="biology">Biology</label>
          </div>

          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="chemistry" checked={this.state.chemistry} onClick={() =>  this.setState({ chemistry: !this.state.chemistry })}/>
            <label class="custom-control-label" for="chemistry">Chemistry</label>
           </div>

          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="english"  checked={this.state.english} onClick={() =>  this.setState({ english: !this.state.english})}/>
            <label class="custom-control-label"    for="english">English</label>
          </div>

          <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="history"  checked={this.state.history} onClick={() =>  this.setState({ history: !this.state.history})}/>
          <label class="custom-control-label"    for="history">History</label>
              </div>
              <br/>
          <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="music"  checked={this.state.music} onClick={() =>  this.setState({ music: !this.state.music})}/>
          <label class="custom-control-label"    for="music">Music</label>
              </div>

          <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="math" checked={this.state.math} onClick={() =>  this.setState({ math: !this.state.math})}/>
          <label class="custom-control-label"    for="math">Math</label>
              </div>

          <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="physics"  checked={this.state.physics} onClick={() =>  this.setState({ physics: !this.state.physics})}/>
          <label class="custom-control-label"   for="physics">Physics</label>
              </div>

          <br/>


          <b>Availability</b><br/>
<MDBRow>
<br/>
  Mon: {this.state.mon.start} - {this.state.mon.end}
          <br/>  <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={"23:00"}
                minValue={"00:00"}
                name={"mon"}
                onChange={(mon) => this.setState({ mon })}
                step={60}
                value={this.state.mon}/>


          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.monNA} onChange={() => this.setState({ monNA: !this.state.monNA })} class="custom-control-input" id="monday"/>
      <label class="custom-control-label" for="monday">Unavailable</label>
      </div>

<br/>
<br/>
Tues: {this.state.tue.start} - {this.state.tue.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"tue"}
              onChange={(tue) => this.setState({ tue })}
              step={60}
              value={this.state.tue}/>


          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.tueNA} onChange={() => this.setState({ tueNA: !this.state.tueNA })} class="custom-control-input" id="tuesday"/>
      <label class="custom-control-label" for="tuesday">Unavailable</label>
      </div>

<br/>
<br/>

Wed: {this.state.wed.start} - {this.state.wed.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"wed"}
              onChange={(wed) => this.setState({ wed })}
              step={60}
              value={this.state.wed}/>

      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" value={this.state.wedNA} onChange={() => this.setState({ wedNA: !this.state.wedNA })} class="custom-control-input" id="wed"/>
        <label class="custom-control-label" for="wed">Unavailable</label>
      </div>
<br/>
<br/>

Thur: {this.state.thur.start} - {this.state.thur.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"thur"}
              onChange={(thur) => this.setState({ thur })}
              step={60}
              value={this.state.thur}/>

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.thuNA} onChange={() => this.setState({ thuNA: !this.state.thuNA })} class="custom-control-input" id="thurs"/>
      <label class="custom-control-label" for="thurs">Unavailable</label>
      </div>

<br/>
<br/>
Fri: {this.state.fri.start} - {this.state.fri.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"fri"}
              onChange={(fri) => this.setState({ fri })}
              step={60}
              value={this.state.fri}/>
          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.friNA} onChange={() => this.setState({ friNA: !this.state.friNA })} class="custom-control-input" id="friday"/>
      <label class="custom-control-label" for="friday">Unavailable</label>
      </div>

<br/>
<br/>
Sat: {this.state.sat.start} - {this.state.sat.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"sat"}
              onChange={(sat) => this.setState({ sat })}
              step={60}
              value={this.state.sat}/>

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.satNA} onChange={() => this.setState({ satNA: !this.state.satNA })} class="custom-control-input" id="saturday"/>
      <label class="custom-control-label" for="saturday">Unavailable</label>
      </div>
<br/>
<br/>

Sun: {this.state.sun.start} - {this.state.sun.end}
        <br/>  <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:00"}
              minValue={"00:00"}
              name={"sun"}
              onChange={(sun) => this.setState({ sun })}
              step={60}
              value={this.state.sun}/>

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" value={this.state.sunNA} onChange={() => this.setState({ sunNA: !this.state.sunNA })} class="custom-control-input" id="sunday"/>
      <label class="custom-control-label" for="sunday">Unavailable</label>
      </div>
  <br/>
  <br/>

  </MDBRow>
          <button className="btn btn-deep-orange" onClick={this.handleTutorEditSubmit}>Submit Changes</button>
        </div>
      </MDBCol>:
    <MDBCol md="6">
    <h6 className="font-weight-bold my-3">
          Subjects:
        </h6>
        <p className="font-weight-normal">
          { this.renderSubjects(this.state.user.subjects) }
        </p>

      <h6 className="font-weight-bold my-3">
          About Me
        </h6>
        <p className="font-weight-normal">
          {this.state.user.about_me}

        </p>

        <h6 className="font-weight-bold my-3">
            Address
          </h6>
          <p className="font-weight-normal">
            {this.state.user.address}

          </p>

        <h6 className="font-weight-bold my-3">
            Availability:
          </h6>
          { this.state.user.schedule ? 
            <p className="font-weight-normal">
              Mon: { this.state.user.schedule.mon.start } - { this.state.user.schedule.mon.end }
              <br/>
              Tues: { this.state.user.schedule.tue.start } - { this.state.user.schedule.tue.end }
              <br/>
              Wed: { this.state.user.schedule.wed.start } - { this.state.user.schedule.wed.end }
              <br/>
              Thurs: { this.state.user.schedule.thu.start } - { this.state.user.schedule.thu.end }
              <br/>
              Fri: { this.state.user.schedule.fri.start } - { this.state.user.schedule.fri.end }
              <br/>
              Sat: { this.state.user.schedule.sat.start } - { this.state.user.schedule.sat.end }
              <br/>
              Sun: { this.state.user.schedule.sun.start } - { this.state.user.schedule.sun.end }
              <br/>
            </p> : 'Schedule Not Uploaded' }
        </MDBCol>

}
  render(){
    if (!this.state.user) return <Redirect to="/" />

    console.log(this.state.user);
    return (
    <MDBContainer>
        <MDBRow>
        <MDBCol md="12">
          <h1 className="h1-responsive font-weight-bold text-center my-5">My Profile</h1>
          <MDBRow>
            <MDBCol md="4">
                    <MDBView>
                      <h3 className="font-weight-bold mt-2" >{this.state.user.name}</h3>
                        <img
                          src={this.state.user.profile_pic}
                          alt=""
                          style={styles.imageStyles}
                        />
                      <br/>
                      <br/>
                        {this.state.isEditing? <p></p>: <p style={{fontSize: "23px"}}><a className="font-weight-bold">Hourly Rate:</a> ${this.state.user.hourly_rate}</p>}
                        {this.state.isEditing ? <Button color="btn btn-deep-orange login" onClick={() => this.setState({ isEditing: !this.state.isEditing })}>Cancel Edit</Button> : <Button color="btn btn-deep-orange login" onClick={() => this.setState({ isEditing: !this.state.isEditing })}>Edit</Button>}
                    </MDBView>
            </MDBCol>
              {this.renderProfileInfo()}
          </MDBRow>
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol md="12">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
            <br/>
            Feedback
            </h2>

            <MDBMedia style={{ border:" 2px groove", padding: "25px", marginBottom: "20px" }}>
                <MDBMedia left href="#" className="mr-3">
                <MDBMedia object src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600108/29213218-stock-vector-female-avatar-silhouette-profile-pictures.jpg?ver=6" alt="Generic placeholder image" style={{width:"90px", height:"90px"}} />
                </MDBMedia>

                <MDBMedia body >
                    {/* <MDBMedia heading>

                    <div   style={{fontSize: "20px"}}>
                    <StarRatingComponent
                             name="rate1"
                             starCount={5}
                             value={4}
                             editing={false}
                              renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                             onStarClick={this.onStarClick.bind(this)}
                           />
                     </div> */}

                    {/* </MDBMedia>
                    I love Jessica! She is such a great tutor. I passed my class with flying colors!!!
                    <p>by <a href="#!" className="font-weight-bold">Truc Vo</a>, 04/22/2019</p> */}

                </MDBMedia>
            </MDBMedia>

            {/* <MDBMedia style={{border:"2px groove", padding: "25px", marginBottom: "20px"}}>
                <MDBMedia left href="#" className="mr-3">
                <MDBMedia object src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600108/29213218-stock-vector-female-avatar-silhouette-profile-pictures.jpg?ver=6" alt="Generic placeholder image" style={{width:"90px", height:"90px"}} />
                </MDBMedia>

                <MDBMedia body >
                    <MDBMedia heading>

                    <div style={{fontSize: "20px"}}>
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
            </MDBMedia> */}

          </MDBCol>
        </MDBRow>
    </MDBContainer>
);
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


  const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
  }

export default connect(mapStateToProps, { getUser })(TutorsPage);
