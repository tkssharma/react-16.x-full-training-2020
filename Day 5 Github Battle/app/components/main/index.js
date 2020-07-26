import React from "react";
import GithubOverviewPage from '../overview/index';
import BattelPageComponent from '../battle/index';
import { Route, NavLink } from 'react-router-dom';
import GithubBattlePage from '../battle/GithubBattlePage';

const MainComponent = (props) => {
    return (<div>
        <nav className="row space-between">
            <ul className="row nav">
                <li><NavLink activeClassName="active" className="nav-link" to="/overview">Overview</NavLink></li>
                <li><NavLink activeClassName="active" className="nav-link" to="/battle" aria-current="page" href="/battle" >Battle</NavLink></li>
            </ul>
        </nav>
        <Route exact path="/" component={GithubOverviewPage} />
        <Route path="/overview" component={GithubOverviewPage} />
        <Route path="/battle" component={BattelPageComponent} />
        <Route exact path="/compare" component={GithubBattlePage} />
        </div>
        )
}


export default MainComponent;
