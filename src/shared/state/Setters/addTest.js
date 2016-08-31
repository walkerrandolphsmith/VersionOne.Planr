import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'ADD_TEST';

const success = createAction(
    ACTION,
    (test) => ({ test })
);

export const addTest = (name) => (dispatch, getState) => {
    const state = getState().backlogStateAtom;
    const currentWi = state.workitems[state.selected];

    axios
        .post('/api/create', {
            assetType: 'Test',
            assetData: {
                Name: name,
                Parent: currentWi.oid
            }
        }, {
            headers: { 'Authorization' : getState().backlogStateAtom.authToken}
        })
        .then((response) => {
            const test = {
                oid: response.data.id.split(':', 2).join(':'),
                name: name,
                assetType: 'Test'
            };

            axios.post('/api/query', {
                'from': 'Test',
                'select': [
                    'Number'
                ],
                'where': {
                    ID: test.oid
                }
            })
            .then(secondResponse => {
                test.number = secondResponse.data[0][0].Number;
                dispatch(success(test));
            })
            .catch(err => {
                //Dispatch success of the first response.
                dispatch(success(test));
            });
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.workitems[state.selected].tests.push(payload.test);
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

