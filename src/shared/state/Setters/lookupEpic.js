import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'LOOKUP_EPIC';

const success = createAction(
    ACTION,
    (epicLookupResults) => ({ epicLookupResults })
);

export const lookupEpic = (query) => (dispatch, getState) => {
    axios
        .post('/api/query', {
            'from': 'Epic',
            'select': [
                'Name',
                'Scope',
                'AssetType'
            ],
            'filter': [
                "AssetState!='Closed'"
            ],
            'find': `${query}*`
        })
        .then((response) => {
            const epics = response.data[0].map(epic => ({
                oid: epic._oid,
                text: epic.Name,
                scope: epic.Scope._oid
            }));
            dispatch(success(epics));
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.epicLookupResults = payload.epicLookupResults;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

