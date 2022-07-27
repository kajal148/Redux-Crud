import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux devtools in browser

ReactDOM.render(
    <Provider store={ createStore(reducers, composerEnhancers(applyMiddleware(reduxThunk)))}>
        <App />
    </Provider>,
document.getElementById('root'));