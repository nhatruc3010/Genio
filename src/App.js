import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import TuteeSignUp from './Components/TuteeSignUp.js';
import TutorSignUp from './Components/TutorSignUp';
import TuteeLogIn from './Components/TuteeLogIn.js';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar/>
        <BrowserRouter>
          <div id='routes' >
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component ={Contact}/>
          <Route exact path= '/tuteesignup' component={TuteeSignUp}/>
          <Route exact path= '/tutorsignup' component={TutorSignUp}/>
          <Route exact path= '/tuteelogin' component={TuteeLogIn}/>
          </div>
        </BrowserRouter>
        <Footer/>
        </div>

    );
  }
}


export default App;
