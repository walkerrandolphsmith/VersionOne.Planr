import axios from 'axios';
import { createAction } from  'redux-actions';

const ACTION = 'DELETE_TEST';

const success = createAction(ACTION, oid => ({
    oid
}));

export const deleteTest = oid => (dispatch, getState) => {
    axios
        .post('/api/executeOperation', {
            oidToken: oid,
            operationName: 'Delete'
        })
        .then(response => {
            dispatch(success(oid));
        }).catch(error => {
            console.log(error);
        });
};

const reducer = (state, payload) => {
    let parent = null;
    for(let oidToken in state.workitems) {
        const workitem = state.workitems[oidToken];
        parent = (workitem.tests || []).find(t => t.oid === payload.oid) ? workitem : parent;
        if(parent) break;
    }
    parent.tests = parent.tests.filter((t)=> t.oid !== payload.oid);
    state.workitems = {...state.workitems};
    return {...state};
};

export default {
    [ACTION]: reducer
}