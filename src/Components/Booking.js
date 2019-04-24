import React, {Component} from "react";
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn,
         MDBInput,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter } from 'mdbreact';
import {SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import TimeRange from 'react-time-range';

export default class Booking extends Component {
  state = {
    modal: false,
    date: new moment(),
    startTime: new moment(),
    endTime: new moment()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
    <MDBContainer>
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
          <MDBCol >
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
    startTime={this.state.startTime}
    endTime={this.state.endTime}
    startMoment={this.state.startTime}
    endMoment={this.state.endTime}
    onChange={({startTime, endTime}) => this.setState({startTime, endTime})}
/>




            </form>
          </MDBCol>
        </MDBRow>
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn onClick={this.toggle}
                    outline rounded
                    color='cyan darken-2'
                    style={styles.button}>
              Book
          </MDBBtn>
          <MDBBtn onClick={this.toggle}
                  outline rounded
                  color='cyan darken-2'
                  style={styles.button}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

}
const styles = {
  button:{
    font: ' bold 20px Economica',
    color: 'black'
  }
}
