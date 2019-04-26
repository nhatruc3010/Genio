import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './Components/redux/configureStore';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';
import TutorProfilePage from './Components/TutorProfilePage';
import TutorsPage from './Components/Tutors/TutorsPage';
import TutorsSession from './Components/Tutors/TutorsSession';
import StudentProfile from './Components/StudentProfile';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.cs = configureStore();
  }
  
  render() {
    return (
      <Provider store={this.cs.store}>
        <PersistGate loading={null} persistor={this.cs.persistor}>
          <React.Fragment>
            <NavBar/>
            <BrowserRouter>
              <React.Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component ={Contact}/>
                <Route exact path='/search' component ={SearchPage}/>
                <Route exact path='/searchresults' component ={SearchResults}/>
                <Route exact path='/tutoredit' component ={TutorsPage}/>
                <Route exact path='/tutorprofile' component ={TutorProfilePage}/>
                <Route exact path='/tutorsession' component ={TutorsSession}/>
                <Route exact path='/studentprofile' component ={StudentProfile}/>
              </React.Fragment>
            </BrowserRouter>
            <Footer/>
          </React.Fragment>
        </PersistGate>
      </Provider>
    );
  }
}


export default App;
