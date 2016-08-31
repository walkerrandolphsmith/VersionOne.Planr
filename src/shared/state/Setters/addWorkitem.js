import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'ADD_WORKITEM';

const success = createAction(
    ACTION,
    (workitem) => ({ workitem })
);

const addWorkitem = (name, assetType, dispatch, getState) => {
    const epic = getState().backlogStateAtom.epic;
    axios
        .post('/api/create', {
            assetType: assetType,
            assetData: {
                Name: `New ${assetType}`,
                Scope: epic.scope,
                Super: epic.oid
            }
        }, {
            headers: { 'Authorization' : getState().backlogStateAtom.authToken}
        })
        .then((response) => {
            const workitem = {
                oid: response.data.id.split(':', 2).join(':'),
                name: response.data.Attributes.Name.value,
                assetType: assetType
            };

            axios.post('/api/query', {
                'from': assetType,
                'select': [
                    'Number'
                ],
                'where': {
                    ID: workitem.oid
                }
            })
            .then(secondResponse => {
                workitem.number = secondResponse.data[0][0].Number;
                dispatch(success(workitem));
            })
            .catch(err => {
                //Dispatch success of the first response.
                dispatch(success(workitem));
            });
        })
        .catch(err => {
            console.log('failure')
        });
};

export const addStory = (name) => (dispatch, getState) => {
    addWorkitem(name, 'Story', dispatch, getState);
};

export const addDefect = (name) => (dispatch, getState) => {
    addWorkitem(name, 'Defect', dispatch, getState);
};

const reducer = (state, payload) => {
    const workitems = {};
    for(let oid in state.workitems) {
        workitems[oid] = state.workitems[oid];
    }
    workitems[payload.workitem.oid] = payload.workitem;
    return {
        ...state,
        workitems: workitems
    };
};

export default {
    [ACTION]: reducer
};

