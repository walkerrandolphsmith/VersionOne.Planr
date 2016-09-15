import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'ADD_TEST';

const success = createAction(
    ACTION,
    (test) => ({ test })
);

const IS_NO_LONGER_RECENT = 'IS_NO_LONGER_RECENT';
const addedTestNoLongerRecent = createAction(IS_NO_LONGER_RECENT);

export const addTest = (name) => (dispatch, getState) => {
    const state = getState().atom;
    const currentWi = state.workitems[state.selected];

    axios
        .post('/api/create', {
            assetType: 'Test',
            assetData: {
                Name: name,
                Parent: currentWi.oid
            }
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
                setTimeout(() => {
                    dispatch(addedTestNoLongerRecent());
                }, 500);
            })
            .catch(err => {
                //Dispatch success of the first response.
                dispatch(success(test));
                dispatch(addedTestNoLongerRecent());
            });
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.recentlyAddedTest = true;
    state.workitems[state.selected].tests.unshift(payload.test);
    state.workitems = { ...state.workitems };
    return { ...state };
};

const testNoLongerRecent = (state) => {
    state.recentlyAddedTest = false;
    return { ...state };
};

export default {
    [ACTION]: reducer,
    [IS_NO_LONGER_RECENT]: testNoLongerRecent
};

