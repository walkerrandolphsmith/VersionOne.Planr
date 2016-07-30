import { createStore, compose } from 'redux';
import middlewareBuilder from './middlewareBuilder';
import rootReducer from './rootReducer';

export default function configureStore({ initialState, history }) {
    const createStoreWithMiddleware = compose(...middlewareBuilder(history))(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if(module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}