import { createAction } from 'redux-actions';

const ACTION = 'SET_TAB';

export const setTab = createAction(
    ACTION,
    (tabType, tabIndex) => ({ tabType, tabIndex })
);

const reducer = (state, payload) => ({
    ...state,
    [payload.tabType]: payload.tabIndex
});

export default {
    [ACTION]: reducer
};

