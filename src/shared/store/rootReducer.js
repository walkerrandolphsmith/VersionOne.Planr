import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { Reducer } from './../state';

export default combineReducers({
    routing: router,
    atom: Reducer
});
