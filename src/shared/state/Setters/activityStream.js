import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'GET_ACTIVITY_STREAM';

const success = createAction(
    ACTION,
    (workitemOidToken, activity) => ({workitemOidToken, activity})
);

export const getActivityStream = (workitemOidToken) => (dispatch, getState) => {
    axios
        .get(`/api/activitystream/${workitemOidToken.replace(':', '-')}`)
        .then(response => {
            const activity = response.data;
            dispatch(success(workitemOidToken, activity));
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitemOidToken].activity = payload.activity;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

