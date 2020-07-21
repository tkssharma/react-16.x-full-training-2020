import React from 'react';
import { render } from 'react-dom';
//------------------dashboard-------------------//
import MainComponent from './components/main';

import {HashRouter } from 'react-router-dom'
render(
		<HashRouter>
		   	<div className="container">
			      	<MainComponent />
				</div>
		</HashRouter>
, document.getElementById("app"));
