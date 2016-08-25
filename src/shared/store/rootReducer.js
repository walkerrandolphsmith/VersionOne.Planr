import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { Reducer } from './../atoms/backlog';

export default combineReducers({
    routing: router,
    backlogStateAtom: Reducer
});
