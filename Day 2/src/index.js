import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var trainings = [
  { name: 'Web Development', price: 300 },
  { name: 'Design', price: 400 },
  { name: 'Integration', price: 250 },
  { name: 'Training', price: 220 }
];

ReactDOM.render(
    <App trainings={trainings}/>,
  document.getElementById('root')
);

serviceWorker.unregister();
