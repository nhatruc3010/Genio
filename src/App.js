import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';
import TutorProfilePage from './Components/TutorProfilePage';
import TutorsPage from './Components/Tutors/TutorsPage';
import TutorsSession from './Components/Tutors/TutorsSession';

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
          <Route exact path='/search' component ={SearchPage}/>
          <Route exact path='/searchresults' component ={SearchResults}/>
          <Route exact path='/tutoredit' component ={TutorsPage}/>
          <Route exact path='/tutorprofile' component ={TutorProfilePage}/>
            <Route exact path='/tutorsession' component ={TutorsSession}/>
          </div>
        </BrowserRouter>
        <Footer/>
        </div>

    );
  }
}


export default App;
