import React, { Component } from "react";
import "./App.css";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Container from './components/container';
import UserContainerComp from './components/user-container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  submitUser(user){
    console.log(user);
  }
    render() {
        return (
          <BrowserRouter>
            <Header />
             <Switch>
              <Route exact path="/" component={Container} />
              <Route exact path="/blog" component={Container} />
              <Route  path="/blog/:userid" component={UserContainerComp} />
              </Switch>  
          </BrowserRouter>
        );
    }
}

export default App;