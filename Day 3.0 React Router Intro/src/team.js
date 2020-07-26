import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <ul>
            <li>
            <Link to="teams/team1">team1</Link>
            </li>
            <li>
            <Link to="teams/team3">team1</Link>
            </li>
            <li>
            <Link to="teams/team2">team2</Link>
            </li>
          </ul>
        )
    }
}