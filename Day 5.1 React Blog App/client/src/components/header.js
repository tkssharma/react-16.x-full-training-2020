import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                React Bootstrap
              </Navbar.Brand>
            </Navbar>
          </React.Fragment>
        );
    }
}

export default Header;