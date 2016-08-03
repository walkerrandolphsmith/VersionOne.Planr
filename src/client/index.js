const injectTouchTapEvent = require('react-tap-event-plugin');
import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import Routes from './../shared/routes';
import configureStore from './../shared/store';
import './assets/stylesheets/index.less';

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});

const initialState = window.__INITIAL_STATE__;

const store = configureStore({
    initialState: initialState,
    history: browserHistory
});

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
});

injectTouchTapEvent();
const mountNode = document.getElementById('app');
ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            {Routes}
        </Router>
    </Provider>,
    mountNode
);