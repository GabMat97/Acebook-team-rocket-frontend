import React, { Component } from 'react';
import AllPosts from './AllPosts.js';
import Welcome from './Welcome.js';
import Navbar from './Navbar.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Welcome />
        
        <AllPosts />
      </React.Fragment>
    )
  }
}

export default App;
