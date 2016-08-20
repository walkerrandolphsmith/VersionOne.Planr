import { createStore, compose } from 'redux';
import createMiddlewares from './createMiddlewares';
import rootReducer from './rootReducer';
import devTools from 'remote-redux-devtools';
import env from './../env';

export default ({ initialState, history }) => {
    let enhancers = [createMiddlewares(history)];
    const store = createStore(rootReducer, initialState, compose(...enhancers));

    if(module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};