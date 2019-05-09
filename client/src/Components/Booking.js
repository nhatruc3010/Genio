import React, {Component} from "react";
import { MDBRow,
         MDBCol,
         MDBBtn,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter } from 'mdbreact';
import {SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import TimeRange from 'react-time-range';
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from 'react-router-dom';

import Payment from './Payment';

class Booking extends Component {
  state = {
    modal: false,
    payModal: false,
    date: new moment(),
    startTime: new moment(),
    endTime: new moment(),
    redirect: false
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.user) {
      return {
        user: props.user
      };
    }

    return null;
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  newtoggle = () => {
    this.setState({
      payModal: !this.state.payModal,
    });
  }

  submit = () => {
    let dateStr = this.state.date.format('MMMM DD, YYYY ');
    let startingStr = this.state.startTime.format('HH:MM');
    let endingStr = this.state.endTime.format('HH:MM');

    axios.post('http://localhost:3001/sessions/book', {
      tutorID: this.props.tutor_id,
      tuteeID: this.state.user._id,
      startTime: new Date(`${dateStr} ${startingStr}`).valueOf(),
      endTime: new Date(`${dateStr} ${endingStr}`).valueOf()
    })
      .then(res => {
        alert('Thanks for booking with Genio! Your tutor has been notified!');
        
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/search" /> 
    
    return (
    <div>
      <MDBBtn onClick={this.toggle}
              outline rounded
              color='cyan darken-2'
              style={styles.button}
              >
        BOOK NOW
      </MDBBtn>

      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Book an appointment</MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
          <MDBCol>
            <form>
              Pick a Date: &nbsp; &nbsp;

              <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="date1"
                required={true}
              />

              <br/>
              <br/>

              <TimeRange
                  // startTime={this.state.startTime}
                  // endTime={this.state.endTime}
                  startMoment={this.state.startTime}
                  endMoment={this.state.endTime}
                  onChange={({startTime, endTime}) => this.setState({ startTime: new moment(startTime), endTime: new moment(endTime) })}
              />
            </form>
          </MDBCol>
        </MDBRow>
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn onClick={this.newtoggle}
                    outline rounded
                    color='cyan darken-2'
                    style={styles.button}>
              Book
          </MDBBtn>

          <MDBModal isOpen={this.state.payModal} toggle={this.newtoggle}>
            <MDBModalHeader toggle={this.newtoggle}>Make a Payment </MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                  <MDBCol >
                    <Payment/>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn onClick={this.submit}
                          outline rounded
                          color='cyan darken-2'
                          style={styles.button}>
                    Payment
                </MDBBtn>
              </MDBModalFooter>
          </MDBModal>

          <MDBBtn onClick={this.toggle}
                  outline rounded
                  color='cyan darken-2'
                  style={styles.button}>
            Close
          </MDBBtn>

        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};

}
const styles = {
  button:{
    font: ' bold 20px Economica',
    color: 'black'
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(Booking);
