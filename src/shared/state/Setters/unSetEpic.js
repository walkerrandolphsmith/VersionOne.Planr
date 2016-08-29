import { createAction } from 'redux-actions';

const ACTION = 'UN_SET_EPIC';

export const unSetEpic = createAction(
    ACTION,
    () => ({})
);

const reducer = (state, payload) => {
    state.epic = '';
    return { ...state };
};

export default {
    [ACTION]: reducer
};

