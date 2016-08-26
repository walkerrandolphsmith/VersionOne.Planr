import { createAction } from 'redux-actions';

const ACTION = 'SET_TAB';

export const setTab = createAction(
    ACTION,
    tabKey => ({tabKey})
);

const reducer = (state, payload) => ({
    ...state,
    tab: payload.tabKey
});

export default {
    [ACTION]: reducer
};

