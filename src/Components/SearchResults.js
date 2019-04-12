import React, { Component } from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';

import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBBtn,
         MDBInput,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';



export default class SearchResults extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            dropdownOpen: false,
            sortOption:''
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


    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        let {subject} = this.state;

            this.props.search(subject);
    }

    render(){
        return(
            <div>
            <div className = 'search-img' style={ styles.homeStyle}></div>
            <div>
            <MDBContainer>
            <Form className="form-wrapper">
                <MDBRow>
                    <MDBCol size="5" md="7">
                        <FormGroup>
                            <Label className="edit-label" for="exampleDate"> </Label>
                            <Input onChange={this.handleChange} name="subject" value={this.state.subject} className="location" placeholder=" Enter Subject"/>

                        </FormGroup>
                    </MDBCol>
                    <MDBCol style={styles.updateButton} size="1" md="1">
                        <MDBBtn onClick={this.handleSubmit}> <i class="fa fa-search" aria-hidden="true"></i> </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </Form>
            </MDBContainer>
        </div>

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


                          <div style={{paddingLeft: '300px', paddingRight: '300px', paddingTop:'20px', paddingBottom: '20px'}}>
                              <div className='card'>
                                            <div className="row ">
                                                  <div className="col-md-4">
                                                    <h3 className="card-title">Jessica Tran</h3>
                                                       <div><img src="https://i.pinimg.com/236x/f3/61/e3/f361e30b86fee7661463bf331de5b1b1.jpg"/></div>
                                                  </div>
                                                  <div className="col-md-5 px-3">
                                                      <div className="card-block px-3">
                                                          <h3 className="card-title">Subjects: Chemistry, Biology</h3>
                                                          <p className="card-text"><i class="fas fa-star" style={{color: '#FFDC00'}}></i><i class="fas fa-star" style={{color: '#FFDC00'}}></i><i class="fas fa-star" style={{color: '#FFDC00'}}></i><i class="fas fa-star" style={{color: '#FFDC00'}}></i> </p>
                                                          <p>About Me: </p>
                                                          <p>Blah Blah Blah Blah BLah BlahBlah Blah Blah Blah BLah BlahBlah Blah Blah Blah BLah BlahBlah Blah Blah Blah BLah BlahBlah Blah Blah Blah BLah Blah</p>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-3 price">
                                                    <h3 className="reservation-price">Hourly Rate: $54</h3>
                                                      <MDBBtn>Check Profile</MDBBtn>
                                                  </div>
                                            </div>
                              </div>
                              </div>


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
    }
};
