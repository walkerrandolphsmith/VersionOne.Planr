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
                'AssetType',
                'Category',
                'Category.Name'
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
                scope: epic.Scope._oid,
                category: {
                    oid: epic.Category._oid,
                    name: epic['Category.Name']
                }
            }));
            dispatch(success(epics));
        })
        .catch(err => {
            console.log('failure', err);
        });
};

const reducer = (state, payload) => {
    state.epicLookupResults = payload.epicLookupResults;
    return { ...state };
};

export default {
    [ACTION]: reducer
};
