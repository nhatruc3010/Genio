import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import SearchForm from './SearchForm';
import '../App.css';



  export default class SearchPage extends Component {
    constructor(props) {
      super(props);
      this.state={};
    }

      render(){
        return(
          <div>
            <div className="background-image" style={ styles.homeStyle }>
              <SearchForm/>
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
      }
    }
