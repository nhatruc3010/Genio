import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import {
            View, CardImage, CardText, CardBody, Card, Fa, CardTitle,
            Modal, ModalHeader, ModalFooter, ModalBody } from 'mdbreact';
import { Container, Row, Col, } from 'reactstrap';
import {TabContent, TabPane, div, a, Button} from 'reactstrap';
 
import { connect } from 'react-redux';

import { getSessions } from './redux/actions/sessions';

import moment from 'moment';

class StudentSession extends Component{

    constructor(props) {
        super(props);

        this.state = {
            sessions:[],
            modal: false,
            isCancelling: false,
            cancelledData: null,
            isEditing: false,
            selectedBooking: {},
        };
    }

    toggleModal = () => {
        this.state.modal ?
            this.setState({
                modal: !this.state.modal,
                isCancelling: false,
                cancelled: false,
                isEditing: false
            }) :
            this.setState({
                modal: !this.state.modal
            });
    }

    static getDerivedStateFromProps(props,state) {
        if (props.sessions !== state.sessions || props.user !== state.user) {
            return {
                sessions: props.sessions,
                user: props.user
            };
        }

        return null;
    }

    componentDidMount() {
        this.props.getSessions(this.state.user._id, this.state.user.type);
    }

    renderAllSessions = () => 
        this.state.sessions ?
        <Table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Tutor</th>
                  <th>Dates</th>
                  <th>Time</th>
                  <th>Place of Session</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>View Details</th>

              </tr>
              </thead>
              <tbody>{
                    this.state.sessions.map((session) => 
                      <tr>
                          <td style={{ paddingTop: 25 }}>{session._id}</td>
                          <td style={{ paddingTop: 25 }}>{session.tutorID}</td>
                          <td style={{ paddingTop: 25 }}>{new Date(session.time_created).toUTCString()}</td>
                          <td style={{ paddingTop: 25 }}>{session.start_time}</td>
                          <td style={{ paddingTop: 25 }}>{session.address}</td>
                          <td style={{ paddingTop: 25 }}>{session.total}</td>
                          <td style={{ paddingTop: 25 }}>{session.cancelled ?  'Cancelled' : 'Active' }</td>

                          <td>
                          <Button
                          onClick={() => {
                            this.setState({ selectedBooking: session });
                            this.toggleModal();}}
                          color="btn btn-deep-orange login"
                          className="text-center"
                          style={{ margin: 0 }}>
                          <Fa icon="eye"></Fa>
                          </Button>
                          </td>

                      </tr>
                    )}
              </tbody>
          </Table> : 

                <div style={{ margin: '10% 0 10% 0'}}>
                    <h5>No Booking Tutor Yet!</h5>

                    <p>Go book a tutor!</p>

                </div>;



    render() {
        return(
          <div>
            <h1 className="h1-responsive font-weight-bold text-center my-5">Sessions</h1>
          <Container style={{ marginTop: '10em' }}>
                                <Row style = {styles.textBlock}>
                                    <Col sm={12}>
                                        <div className="row" style={{borderBottomColor: "transparent",padding: '25px'}}>

                                        {this.renderAllSessions()}

                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                            </div>
        );
    }
}


const styles = {
    textBlock: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '20px',
        textAlign: 'center',
        marginTop: '20px',
        color: 'white',
        minHeight: '50vh'
    },


}

const mapStateToProps = state => ({
    user: state.auth.user,
    sessions: state.data.sessions
});

export default connect(mapStateToProps, { getSessions })(StudentSession);