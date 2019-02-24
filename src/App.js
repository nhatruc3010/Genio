import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './Components/NavbarPage';
import Footer from './Components/Footer';
import Home from './Components/Home'

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar/>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}


export default App;
