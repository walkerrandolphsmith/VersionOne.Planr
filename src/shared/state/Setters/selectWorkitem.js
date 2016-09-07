import { createAction } from 'redux-actions';

const ACTION = 'SELECT_WORKITEM';

export const selectWorkitem = createAction(
    ACTION,
    (workitemOidToken) => ({ workitemOidToken })
);

const reducer = (state, payload) => ({
    ...state,
    selected: payload.workitemOidToken
});

export default {
    [ACTION]: reducer
};

