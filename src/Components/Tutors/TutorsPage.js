import React, {Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBMedia, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { MDBContainer, Button } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';
import FileBase64 from 'react-file-base64';
import TimeRange from 'react-time-range';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

export default class TutorsPage extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      isEditing: false,
      startTime: new moment(),
      endTime: new moment()
    };
  }

  onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
}



renderProfileInfo() {
  return this.state.isEditing ?

    <MDBCol md="6">
        <div ><br/>
          <b>Upload New Image</b><br/><FileBase64 onDone={file => this.setState({ file: file.base64 })}/><br/><br/>
          <b>Hourly Rate</b><br/><input className="form-control" onChange={this.handleChange} name="tutorHourlyRate" type="text"/>
          <b>Subjects</b><br/><input className="form-control" onChange={this.handleChange} name="profileSubject" type="text" /><br/>
          <b>About Me</b><br/><textarea className="form-control" rows="10" onChange={this.handleChange} name="aboutMe" type="text" /><br/>
          <b>Address</b><br/><input className="form-control" onChange={this.handleChange} name="address" type="text" /><br/>



          <b>Availability</b><br/>
<MDBRow>

          <br/> <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Mon:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />


          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="monday"/>
      <label class="custom-control-label" for="monday">Unavailable</label>
      </div>

<br/>
<br/>
          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Tues:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="tuesday"/>
      <label class="custom-control-label" for="tuesday">Unavailable</label>
      </div>

<br/>
<br/>

          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Wed:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="wed"/>
      <label class="custom-control-label" for="wed">Unavailable</label>
      </div>
<br/>
<br/>

          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Thurs:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="thurs"/>
      <label class="custom-control-label" for="thurs">Unavailable</label>
      </div>

<br/>
<br/>
          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Fri:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="friday"/>
      <label class="custom-control-label" for="friday">Unavailable</label>
      </div>

<br/>
<br/>
          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Sat:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="saturday"/>
      <label class="custom-control-label" for="saturday">Unavailable</label>
      </div>

<br/>
<br/>
          <TimeRange
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              startLabel="Sun:"
              endLabel="-"
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
          />

          <div class="custom-control custom-checkbox custom-control-inline">
      <input type="checkbox" class="custom-control-input" id="sunday"/>
      <label class="custom-control-label" for="sunday">Unavailable</label>
      </div>
<br/>
<br/>

  </MDBRow>
          <button className="btn btn-deep-orange login">Submit Changes</button>

        </div>

      </MDBCol>:

    <MDBCol md="6">
    <h6 className="font-weight-bold my-3">
          Subjects:
        </h6>
        <p className="font-weight-normal">
          Chemistry, Physics, Calculus

        </p>

      <h6 className="font-weight-bold my-3">
          About Me
        </h6>
        <p className="font-weight-normal">
          Hello! My name is Jessica Tran. I like to study chemistry in my free time. I graduated from SJSU in chemical engineering. I've been tutoring people for over 5 years.

        </p>

        <h6 className="font-weight-bold my-3">
            Address
          </h6>
          <p className="font-weight-normal">
            1 Washington St, San Jose, CA, 95126

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


        </MDBCol>

}










  render(){
    return (
    <MDBContainer>
        <MDBRow>
        <MDBCol md="12">
          <h1 className="h1-responsive font-weight-bold text-center my-5">My Profile</h1>
          <MDBRow>
            <MDBCol md="4">
                    <MDBView >
                      <h3 className="font-weight-bold mt-2" >Jessica Tran</h3>
                      <img
                        src="https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024"
                        alt=""
                        style={styles.imageStyles}
                      />

                      <br/>
                      <br/>

                        {this.state.isEditing? <p></p>: <p style={{fontSize: "23px"}}><a className="font-weight-bold">Hourly Rate:</a> $54</p>}

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
