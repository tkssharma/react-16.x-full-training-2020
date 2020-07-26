import React, { Component } from 'react';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';
import calculate from './logic/calculate';
import './App.css';

class App extends Component {
    state = {
        total: '0',
        next: null,
        operation: null
    }

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (
            <div className='component-app'>
                <Display value={this.state.next || this.state.total || '0'} />
                <Panel clickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;
