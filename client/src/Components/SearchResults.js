import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn,
         MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { connect } from 'react-redux';
import { getAllTutors } from './redux/actions/auth';
import { Redirect } from 'react-router-dom';



class SearchResults extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            dropdownOpen: false,
            sortOption:'',
            biology: false,
            chemistry: false,
            english: false,
            math: false,
            history: false,
            music: false,
            physic: false
        };
          this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
      this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
      }));
  }

  setSort(e) {
this.setState({sortOption: e});
  }


static getDerivedStateFromProps(props, state){
           if(props.tutors !== state.tutors){
               return{
                   ...state,
                   tutors: props.tutors,
                   subject: props.subject
               }
           }
           return null;
}


    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit = event => {
         event.preventDefault();
         let { subject } = this.state;

         this.props.getAllTutors(subject);
         this.setState({ submitted: true });
    }

    renderSubjects(tutor) {
        console.log(tutor)
        let subjects = [];

        Object.keys(tutor.subjects).forEach((v,i) => {
            if (tutor.subjects[v] === true)
                subjects.push(v);
        });

        return subjects.join(',');
    }

    renderTutors() {
        return this.state.tutors.map((v,i) =>

            <div className='card' style={ styles.card}>
                <div className="row " style={ styles.rowcard}>
                    <div className="col-md-4">
                    <h3 className="card-title">{ v.name }</h3>
                        <div><img src="https://i.pinimg.com/236x/f3/61/e3/f361e30b86fee7661463bf331de5b1b1.jpg" alt=""/></div>
                    </div>
                    <div className="col-md-5 px-3">
                        <div className="card-block px-3">
                            <p><b>Subjects:</b> { this.renderSubjects(v) }</p>
                            <p><b>About Me:</b>  { v.about_me }</p>
                        </div>
                    </div>
                    <div className="col-md-3 price">
                    <h3 className="hourly-rate">Hourly Rate: { v.hourly_rate }</h3>
                        <Link to={`/tutorprofile/${v._id}`}><MDBBtn>Check Profile</MDBBtn></Link>
                    </div>
                </div>
            </div>


        );
    }

    render(){
      if (this.state.sortOption === "low") {
              this.state.tutors.sort((a,b) => ((a.hourly_rate) - (b.hourly_rate)));
          }
          else if (this.state.sortOption === "high"){
              this.state.tutors.sort((a,b) => ((b.hourly_rate) - (a.hourly_rate)));
          }

  if (!this.state.user) return <Redirect to="/" />



        return(

            <div style={{ padding: '0px 50px 0px 50px' }}>
                <div className = 'search-img' style={styles.homeStyle}></div>
                    <div>

                            <Form className="form-wrapper" onSubmit={this.onSubmit}>
                                <MDBRow>
                                    <MDBCol size="3" md="4" style={{marginLeft:"30%"}}>
                                        <FormGroup>
                                            <br/>
                                            <Input onChange={this.handleChange} name="subject" value={this.state.subject} placeholder=" Enter Subject"/>

                                        </FormGroup>
                                    </MDBCol>
                                    <MDBCol style={styles.updateButton} size="1" md="1">
                                        <MDBBtn onClick={this.handleSubmit}> <i class="fa fa-search" aria-hidden="true"></i> </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </Form>

                    </div>

      <MDBContainer>






            {/*Sorting Button Here*/}
            <div style={{display: 'flex'}}>
                <MDBDropdown className = 'sortbutton' isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <MDBDropdownToggle caret color='default'>
                    Sort By:
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                    <MDBDropdownItem onClick={()=>{this.setSort("low");}}>
                    Price: Low to Hi
                    </MDBDropdownItem>

                    <MDBDropdownItem divider />

                    <MDBDropdownItem onClick={()=>{this.setSort("high");}}>
                    Price: High to Low
                    </MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </div>

            <div style={{ paddingTop:'20px', paddingBottom: '20px'}}>
                { this.renderTutors() }
            </div>
            </MDBContainer>
          </div>
        );
      }
    }

const styles = {
    homeStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '300px'
    },
    updateButton: {
      color: 'white',
      textAlign: 'center',
      marginTop: '15.6px',
      height: '40px',
      alignItems: 'center',
      display: 'block'
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
    }
};

const mapStateToProps = state => {
    return {
        tutors: state.data.tutors,
        subject: state.data.searchSubject
    };
};

export default connect(mapStateToProps, { getAllTutors })(SearchResults);
