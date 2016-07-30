import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { Reducer as WorkitemReducer } from './../atoms/workitem';

export default combineReducers({
    routing: router,
    workitemStateAtom: WorkitemReducer
});
