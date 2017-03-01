import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loginReducer } from './pages/login/reducers/index';
import { gameReducer } from './pages/game/reducers/index';

const combinedReducer = combineReducers({
	loginReducer: loginReducer,
	form: formReducer,
	gameReducer: gameReducer
});

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancers(middleware));

module.exports = store;