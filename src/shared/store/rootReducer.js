import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { Reducer as WorkitemReducer } from './../atoms/workitem';
import { Reducer as BacklogReducer } from './../atoms/backlog';

export default combineReducers({
    routing: router,
    workitemStateAtom: WorkitemReducer,
    backlogStateAtom: BacklogReducer
});
