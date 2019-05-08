import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col, } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class TutorsSession extends Component{

    constructor(props) {
        super(props);

        this.state = {
          session:[]
        };
    }

renderAllSessions(){
  return <Table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Tutee</th>
                  <th>Dates</th>
                  <th>Time</th>
                  <th>Place of Session</th>
                  <th>Earnings</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
                      <tr>
                          <td style={{ paddingTop: 25 }}>1</td>
                          <td style={{ paddingTop: 25 }}>Truc Vo</td>
                          <td style={{ paddingTop: 25 }}>05/23/2019</td>
                          <td style={{ paddingTop: 25 }}>05:00-12:00</td>
                          <td style={{ paddingTop: 25 }}>1 washington street, san jose, ca, 95126</td>
                          <td style={{ paddingTop: 25 }}>$378</td>
                          <td style={{ paddingTop: 25 }}>Active</td>
                      </tr>
              </tbody>
          </Table>
}


static getDerivedStateFromProps(props, state) {
     if (state.user !== props.user){
       return {
         user: props.user
       };
     }
     return null;
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
      user: state.auth.user
  };
}

export  default connect(mapStateToProps)(TutorsSession)
