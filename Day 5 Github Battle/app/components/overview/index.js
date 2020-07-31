import React from "react";
import { Route, NavLink, Switch } from 'react-router-dom'
import OverviewTechnologyComponent from './pages/OverviewTechnologyComponent';

class OverviewPageComponent extends React.Component {

  render(){
  return (
    <div>
    <ul className="flex-center">
        <li><NavLink activeClassName="active" to="/overview/all" className="btn-clear nav-link"> All </NavLink>
        </li><li><NavLink activeClassName="active" to="/overview/js" className="btn-clear nav-link ">JavaScript</NavLink>
        </li><li><NavLink activeClassName="active" to="/overview/ruby" className="btn-clear nav-link ">Ruby</NavLink>
        </li><li><NavLink  activeClassName="active" to="/overview/java" className="btn-clear nav-link ">Java</NavLink>
        </li><li><NavLink activeClassName="active" to="/overview/css" className="btn-clear nav-link ">CSS</NavLink></li>
        <li><NavLink activeClassName="active"   to="/overview/python" className="btn-clear nav-link ">Python</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={OverviewTechnologyComponent} />
        <Route exact path="/overview" component={OverviewTechnologyComponent} />
        <Route path="/overview/:name" component={OverviewTechnologyComponent} />
      </Switch>
    </div>)
  }
}


export default OverviewPageComponent;
