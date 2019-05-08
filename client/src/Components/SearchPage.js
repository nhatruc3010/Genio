import React, { Component } from 'react';
import SearchForm from './SearchForm';
import '../App.css';
import {MDBContainer,
        MDBRow,
        MDBCol, MDBBtn } from "mdbreact";
import Advertising from './Advertising';
import Team from './Team';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchPage extends Component {
    constructor(props) {
      super(props);
      this.state={};
    }

    handleViewMoreClick = () => {
      window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
          });
      }

      static getDerivedStateFromProps(props, state) {
           if (state.user !== props.user){
             return {
               user: props.user
             };
           }
           return null;
         }

      render(){
        if (!this.state.user) return <Redirect to="/" />
        return(
          <div>
            <div className="background-image" style={ styles.homeStyle }>

            <MDBContainer className="px-md-3 px-sm-0">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 black-text text-center">
                        <SearchForm/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>

                <MDBBtn style={{marginLeft: "auto", marginRight: "auto", marginTop:"20px", backgroundImage: 'linear-gradient(#ff7043, #ff8c17)'}}> Get Book Recommendation </MDBBtn>
                </MDBRow>
              </MDBContainer>


              <br/>
              <br/>
            </div>



            <div className="text-center">
                <btn style={styles.button}
                  onClick={this.handleViewMoreClick}
                  className="text-center" >
                  <i className="fas fa-chevron-down black-text"></i>
                </btn>
            </div>

            <div>
              <Advertising/>
            </div>

            <div>
              <Team/>
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
        marginTop: '0px',
        paddingTop: '15vh',
        overflowY: 'hidden'
      },
      hr:{
          backgroundColor: '#d3a13b',
          border: '3px solid #d3a13b',
          borderRadius: '2px',
          width: '50%',
          textAlign: 'center',


      },
    }

    const mapStateToProps = state => {
      return {
          user: state.auth.user
      };
    }

    export  default connect(mapStateToProps)(SearchPage)
