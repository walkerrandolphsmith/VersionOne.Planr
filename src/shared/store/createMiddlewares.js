import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promiseMiddleware';

export default (history) => {
    return applyMiddleware(
        thunk,
        promiseMiddleware,
        routerMiddleware(history));
}