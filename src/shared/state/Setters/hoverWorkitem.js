import { createAction } from 'redux-actions';

const ACTION = 'HOVER_WORKITEM';

export const hoverWorkitem = createAction(
    ACTION,
    workitemOidToken => ({workitemOidToken})
);

const reducer = (state, payload) => ({
    ...state,
    hovered: payload.workitemOidToken
});

export default {
    [ACTION]: reducer
};

