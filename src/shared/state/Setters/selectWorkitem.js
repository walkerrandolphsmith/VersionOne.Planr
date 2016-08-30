import { createAction } from 'redux-actions';

const ACTION = 'SELECT_WORKITEM';

export const selectWorkitem = createAction(
    ACTION,
    (index, workitemOidToken) => ({ index, workitemOidToken })
);

const reducer = (state, payload) => ({
    ...state,
    caretTopPosition: payload.index,
    selected: payload.workitemOidToken
});

export default {
    [ACTION]: reducer
};

