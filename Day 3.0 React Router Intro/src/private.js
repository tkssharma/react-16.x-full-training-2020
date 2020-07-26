import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from 'react-router-dom';

const Private = ({ componnet: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated 
          ? 
          (<Component {...props}/>)
          :
          (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
      )}/>
);

export default Private;