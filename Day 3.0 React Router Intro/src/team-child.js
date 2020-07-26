import React from 'react';
import {Link} from 'react-router-dom';
export default class Home extends React.Component {
    render() {
        return (
            <ul>
                <h1>Team Name is {this.props.match.params.teamname} </h1>
          </ul>
        )
    }
}