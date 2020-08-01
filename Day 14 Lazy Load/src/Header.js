import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="menu-container">
        <Link className="btn-primary" to="/">
          Home
        </Link>
        <Link className="btn-primary" to="/another-home">
          Another Home
        </Link>
      </div>
    );
  }
}

export default Header;
