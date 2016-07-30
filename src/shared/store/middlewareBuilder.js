import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promiseMiddleware';
import env from './../../shared/env';

export default function middlewareBuilder(history) {
    const middleware = applyMiddleware(
        thunk,
        promiseMiddleware,
        routerMiddleware(history)
    );
    let composeElms = [middleware];

    if(env.isBrowser && env.nodeEnv !== 'production') {

    }

    return composeElms;
}