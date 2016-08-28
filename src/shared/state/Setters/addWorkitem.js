import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'ADD_WORKITEM';

const success = createAction(
    ACTION,
    (workitem) => ({ workitem })
);

export const addWorkitem = (name) => (dispatch, getState) => {
    const epic = getState().backlogStateAtom.epic;
    axios
        .post('/api/create', {
            assetType: 'Story',
            assetData: {
                Name: 'I created you',
                Scope: epic.scope,
                Super: epic.oid
            }
        })
        .then((response) => {
            const workitem = {
                oid: response.data.id.split(':', 2).join(':'),
                name: response.data.Attributes.Name.value,
                assetType: response.data.id.split(':')
            };

            axios.post('/api/query', {
                'from': 'Story',
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

