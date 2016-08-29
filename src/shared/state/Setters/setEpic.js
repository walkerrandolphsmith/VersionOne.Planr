import { createAction } from 'redux-actions';
import axios from 'axios';

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
                'AssetType'
            ],
            'filter': [
                "AssetState!='Closed'"
            ],
            'where': {
                'SuperMeAndUp': epic.oid
            }
        })
        .then((response) => {
            const workitems = response.data[0];
            dispatch(success(workitems));
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.epic = payload.epic;
    return { ...state };
};

const setEpicReducer = (state, payload) => {
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

