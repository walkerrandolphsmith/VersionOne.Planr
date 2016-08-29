import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'UPDATE_WORKITEM';

const success = createAction(
    ACTION,
    (workitem) => ({ workitem })
);

export const updateWorkitem = ({ oid, assetData }) => (dispatch, getState) => {
    axios
        .post('/api/update', {
            oidToken: oid,
            assetData: assetData
        })
        .then((response) => {
            //wip
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    //state.epic = payload.epic;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

