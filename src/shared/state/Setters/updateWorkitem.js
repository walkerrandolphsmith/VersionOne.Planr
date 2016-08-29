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
            for(let attribute in workitem) {
                workitem[attribute] = assetData[attribute];
            }
            dispatch(success(workitem));
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitem.oid] = payload.workitem;
    const newWorkitems = {};
    for(let oid in workitems) {
        newWorkitems[oid] = state.workitems[oid]
    }
    state.workitems = newWorkitems;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

