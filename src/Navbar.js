import React, { Component } from 'react'
import Welcome from './Welcome.js'

class Navbar extends Component {
  render () {
    return (
      <React.Fragment>
      <button onClick={Welcome}>
      Home
      </button>
      <button onClick={Welcome}>
      Sign In
      </button>
      <button onClick={Welcome}>
      Sign Up
      </button>
      </React.Fragment>
    )
  }
}

export default Navbar;
