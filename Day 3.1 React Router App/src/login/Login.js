import React from 'react';
import { Redirect } from 'react-router-dom';
import authHelper from '../helpers/AuthHelper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  onLoginClick() {
    authHelper.authenticate(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/settings" />
    }

    return <button onClick={this.onLoginClick.bind(this)}>Zaloguj!</button>;
  }
}

export default Login;
