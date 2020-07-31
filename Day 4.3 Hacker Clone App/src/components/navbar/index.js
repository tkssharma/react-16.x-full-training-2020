import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/imgs/logo.gif';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img className="logo-img" src={logo} alt=""/>
          <strong>Hacker news</strong>
        </Link>
      </nav>
    );
  }
}

export default Navbar