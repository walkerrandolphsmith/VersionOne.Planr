import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'SET_STATUS';

const success = createAction(
    ACTION,
    (oid, name) => ({ oid, name })
);

export const setStatus = ({ oid, name }) => (dispatch, getState) => {

    const state = getState().backlogStateAtom;
    const currentWi = state.workitems[state.selected];

    axios
        .post('/api/update', {
            oidToken: currentWi.oid,
            assetData: {
                Status: oid
            }
        })
        .then((response) => {
            dispatch(success(oid, name));
        })
        .catch(err => {
            console.log('failure', err)
        });
};

const reducer = (state, payload) => {
    state.workitems[state.selected].status = payload;
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

