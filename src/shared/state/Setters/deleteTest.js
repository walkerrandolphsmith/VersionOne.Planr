import axios from 'axios';
import { createAction } from  'redux-actions';
import _ from 'lodash';

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
    const parent = _.find(state.workitems, (wi)=> wi.tests && wi.tests.find((t)=> t.oid === payload.oid));
    parent.tests = parent.tests.filter((t)=> t.oid !== payload.oid);
    state.workitems = {...state.workitems};
    return {...state};
};

export default {
    [ACTION]: reducer
}