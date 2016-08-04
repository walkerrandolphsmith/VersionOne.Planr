import { createStore, compose} from 'redux';
import createMiddlewares from './createMiddlewares';
import rootReducer from './rootReducer';
import devTools from 'remote-redux-devtools';
import env from './../../shared/env';

export default ({ initialState, history }) => {
 if (instanceName === 'Client'){
     debugger;
 }
    let enhancers = [createMiddlewares(history)];
    if(env.nodeEnv !== 'production') {
        enhancers = enhancers.concat([
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f,
            devTools()
        ]);
    }
    const store = createStore(rootReducer, initialState, compose(...enhancers));

    if(module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};