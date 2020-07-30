/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return ( (props.isAuthenticated && props.private) ? (
    <Route
      {...rest}
      render={matchProps => (
        <Layout >
          <Component
            isAuthenticated={props.isAuthenticated} 
            user={props.user}
            {...matchProps}
          />
        </Layout>
      )}
    />
  ) : ( (props.private === false &&  props.isAuthenticated) ? (
    <Route
      {...rest}
      render={() => <Redirect to="/dashboard" />}
    />) : (
    <Route
      {...rest}
      render={() => <Redirect to="/" />}
    />) 
  )
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
