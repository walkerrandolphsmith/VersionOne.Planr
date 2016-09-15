import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'ADD_LINK';

const success = createAction(
    ACTION,
    (link) => ({ link })
);

export const addLink = (link) => (dispatch, getState) => {
    const state = getState().atom;
    const currentWi = state.workitems[state.selected];
    axios
        .post('/api/create', {
            assetType: 'Link',
            assetData: {
                Name: link.name,
                URL: link.url,
                OnMenu: false,
                Asset: currentWi.oid
            }
        })
        .then((response) => {
            const link = {
                name: response.data.Attributes.Name.value,
                url: response.data.Attributes.URL.value
            };
            dispatch(success(link));
        })
        .catch(err => {
            console.log('failure')
        });
};

const reducer = (state, payload) => {
    state.workitems[state.selected].links.unshift(payload.link);
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

