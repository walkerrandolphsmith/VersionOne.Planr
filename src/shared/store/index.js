import {createStore, compose} from 'redux';
import createMiddlewares from './createMiddlewares';
import rootReducer from './rootReducer';

export default ({initialState, history}) => {
    const enhancers = [createMiddlewares(history)].concat([
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
    ]);
    const store = createStore(rootReducer, initialState, compose(...enhancers));

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};