require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import Login from './pages/login/components/App';
import Application from './pages/application/components/app';
import Search from './pages/search/components/search';
import Profile from './pages/profile/components/index.js';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Login} />
		<Route path='search' component={Application}>
			<IndexRoute component={Search} />
			<Route path='/profile' component={Profile} />
		</Route>
	</Router>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			{routes}
		</Provider>, 
		document.getElementById('app'));
});
