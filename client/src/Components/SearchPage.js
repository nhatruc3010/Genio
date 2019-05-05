import React, { Component } from 'react';
import SearchForm from './SearchForm';
import '../App.css';
import {MDBContainer,
        MDBRow,
        MDBCol } from "mdbreact";
import Advertising from './Advertising';
import Team from './Team';

  export default class SearchPage extends Component {
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

      render(){
        return(
          <div>
            <div className="background-image" style={ styles.homeStyle }>

            <MDBContainer className="px-md-3 px-sm-0">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 black-text text-center">
                        <SearchForm/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>



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
        paddingTop: '30vh',
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
