/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';
import { Empty as EmptyLayout } from './layouts';


import {
  Dashboard as DashboardView,
  NewJob as NewJobView,
  ViewJob as ViewJobView,
  SignIn as SignInView
} from './views';

const Routes = ({ isAuthenticated, ...rest}) => {
  return (
    <Switch>
      <RouteWithLayout
        component={SignInView}
        exact
        isAuthenticated={isAuthenticated}
        layout={EmptyLayout}
        path="/"
        private={false}
        {...rest}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        isAuthenticated={isAuthenticated}
        layout={MainLayout}
        path="/dashboard"
        private
        {...rest}
      />
      <RouteWithLayout
        component={NewJobView}
        exact
        isAuthenticated={isAuthenticated}
        layout={MainLayout}
        path="/form"
        private
        {...rest}
      />
      <RouteWithLayout
        component={ViewJobView}
        exact
        isAuthenticated={isAuthenticated}
        layout={MainLayout}
        path="/register"
        private
        {...rest}
      />
      <RouteWithLayout
        component={ViewJobView}
        exact
        isAuthenticated={isAuthenticated}
        layout={MainLayout}
        path="/search"
        private
        {...rest}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
