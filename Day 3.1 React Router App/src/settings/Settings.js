import React from 'react';
import { Redirect } from 'react-router-dom';
import authHelper from '../helpers/AuthHelper';

const Settings = (props) => {
  if (authHelper.isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return <p>Tutaj znajdziesz ustawienia swojego konta!</p>;
}

export default Settings;
