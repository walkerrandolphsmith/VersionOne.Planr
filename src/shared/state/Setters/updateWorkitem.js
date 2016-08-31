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
            const workitem = getState().backlogStateAtom.workitems[oid];
            for(let attribute in assetData) {
                workitem[attribute] = assetData[attribute];
            }
            dispatch(success(workitem));
        })
        .catch(err => {
            console.log('failure', err)
        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitem.oid] = payload.workitem;
    state.workitems = {...state.workitems}; //to trigger reselect
    return { ...state };
};

export default {
    [ACTION]: reducer
};

