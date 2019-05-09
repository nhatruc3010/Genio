import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col, } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSessions } from '../redux/actions/sessions';

class TutorsSession extends Component{

    constructor(props) {
        super(props);

        this.state = {
          session:[]
        };
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
                  <th>Price</th>
                  <th>Status</th>

              </tr>
              </thead>
              <tbody>{
                    this.state.sessions.map((session) => {
                        let startDate = new Date(session.start_time);
                        let endDate = new Date(session.end_time);
                        
                        return (
                      <tr>
                          <td style={{ paddingTop: 25 }}>{session._id}</td>
                          <td style={{ paddingTop: 25 }}>{session.tutor_id}</td>
                          <td style={{ paddingTop: 25 }}>{new Date(session.time_created).toLocaleString().split(',')[0]}</td>
                          <td style={{ paddingTop: 25 }}>{startDate.getHours()}:{startDate.getMinutes()} - {endDate.getHours()}:{endDate.getMinutes()}</td>
                          <td style={{ paddingTop: 25 }}>${session.subtotal + session.tax}</td>
                          <td style={{ paddingTop: 25 }}>{session.cancelled ?  'Cancelled' : 'Active' }</td>

                          {/* <td> */}
                          {/* <Button
                          onClick={() => {
                            this.setState({ selectedBooking: session });
                            this.toggleModal();}}
                          color="btn btn-deep-orange login"
                          className="text-center"
                          style={{ margin: 0 }}>
                          <Fa icon="eye"></Fa>
                          </Button> */}
                          {/* </td> */}

                      </tr>
                        )}
                    )}
              </tbody>
          </Table> :

                <div style={{ margin: '10% 0 10% 0'}}>
                    <h5>No Booking Tutor Yet!</h5>

                    <p>Go book a tutor!</p>

                </div>;

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


    render() {
      if (!this.state.user) return <Redirect to="/" />
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

const mapStateToProps = state => {
  return {
      user: state.auth.user,
      sessions: state.data.sessions
  };
}

export  default connect(mapStateToProps, { getSessions })(TutorsSession)
