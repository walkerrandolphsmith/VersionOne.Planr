import { createAction } from 'redux-actions';

const ACTION = 'UN_SET_EPIC';

export const deSelectEpic = createAction(
    ACTION,
    () => ({})
);

const reducer = (state, payload) => {
    state.epic = '';
    state.selected = '';
    state.currentDetailsTab = 0;
    state.currentTestsTab = 0;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

