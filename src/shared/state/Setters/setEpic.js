import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'SET_EPIC';

export const setEpic = createAction(
    ACTION,
    (epicOidToken) => ({epicOidToken})
);

const reducer = (state, payload) => {
    state.epic = payload.epicOidToken;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

