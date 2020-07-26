import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Events from './events/Events';
import Settings from './settings/Settings';
import Login from './login/Login';
import NotFound from './not-found/NotFound';

const App = (props) => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeStyle={{ fontWeight: 'bold' }}>Ustawienia</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
          <Route path="/" component={Events} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
