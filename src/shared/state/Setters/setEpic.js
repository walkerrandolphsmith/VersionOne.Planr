import { createAction } from 'redux-actions';
import axios from 'axios';
import { getWorkitemDetails } from './workitemDetails';

const SET_EPIC_ACTION = 'SET_EPIC_ACTION';
const SET_WORKITEMS_ACTION = 'SET_WORKITEMS_ACTION';

const selectEpic = createAction(
    SET_EPIC_ACTION,
    (epic) => ({ epic })
);

const success = createAction(
    SET_WORKITEMS_ACTION,
    (workitems) => ({ workitems })
);

export const setEpic = (epic) => (dispatch, getState) => {
    dispatch(selectEpic(epic));
    axios
        .post('/api/query', {
            'from': 'PrimaryWorkitem',
            'select': [
                'Name',
                'Number',
                'AssetType',
                'Order'
            ],
            'filter': [
                "AssetState!='Closed'"
            ],
            'where': {
                'SuperMeAndUp': epic.oid
            },
            'sort': [
                '+Order'
            ]
        })
        .then((response) => {
            const workitems = response.data[0];
            if (workitems.length > 0) {
                dispatch(success(workitems));
                dispatch(getWorkitemDetails(workitems[0]._oid));
            }
            else {
                dispatch(success(workitems));
            }
        })
        .catch(err => {
            console.log('failure', err);
        });
};

const reducer = (state, payload) => {
    state.epic = payload.epic;
    return { ...state };
};

const setEpicReducer = (state, payload) => {
    if(payload.workitems.length > 0 && !state.selected)
        state.selected = payload.workitems[0]._oid;

    state.workitems = payload.workitems.reduce((map, workitem) => {
        map[workitem._oid] = {
            oid: workitem._oid,
            assetType: workitem.AssetType,
            number: workitem.Number,
            name: workitem.Name
        };
        return map;
    } ,{});
    return { ...state };
};

export default {
    [SET_EPIC_ACTION]: reducer,
    [SET_WORKITEMS_ACTION]: setEpicReducer
};

