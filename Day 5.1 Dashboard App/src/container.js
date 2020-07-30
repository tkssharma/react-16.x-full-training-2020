/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SwitchRoutes from './Routes';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import Container from './container/context';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
const browserHistory = createBrowserHistory();

class ConatinerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isAuthenticated: true
    }
  }


  addNewJob = async (job) => {
    this.state.jobs.push(job)
    this.setState({
      jobs: this.state.jobs
    });
  }
  RemoveJob = async (id) => {
    let newJob = this.state.job.filter(i => i.id !== id)
    this.setState({
      jobs: newJob
    });
  }

  render() {
    return (
      <Container.Provider
        value={{
          state: this.state,
          addNewJob: this.addNewJob,
          removeJob: this.RemoveJob,
        }
        }
      >
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <SwitchRoutes
              isAuthenticated={this.state.isAuthenticated}
            />
          </Router>
        </ThemeProvider>
      </Container.Provider>
    );
  }
}
export default ConatinerComponent;
