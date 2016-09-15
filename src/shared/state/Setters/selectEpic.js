import { createAction } from 'redux-actions';
import axios from 'axios';

const SET_EPIC_ACTION = 'SET_EPIC_ACTION';
const SET_WORKITEMS_ACTION = 'SET_WORKITEMS_ACTION';

const setEpic = createAction(
    SET_EPIC_ACTION,
    (epic) => ({ epic })
);

const setWorkitems = createAction(
    SET_WORKITEMS_ACTION,
    (workitems) => ({ workitems })
);

export const selectEpic = (epic) => (dispatch, getState) => {
    dispatch(setEpic(epic));
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
                dispatch(setWorkitems(workitems));
            }
            else {
                dispatch(setWorkitems(workitems));
            }
        })
        .catch(err => {
            console.log('failure', err);
        });
};

const setEpicReducer = (state, payload) => {
    state.epic = payload.epic;
    return { ...state };
};

const setWorkitemsReducer = (state, payload) => {
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
    [SET_EPIC_ACTION]: setEpicReducer,
    [SET_WORKITEMS_ACTION]: setWorkitemsReducer
};

