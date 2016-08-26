import { createAction } from 'redux-actions';

const ACTION = 'SET_CARET';

export const setCaret = createAction(
    ACTION,
    offset => ({offset})
);

const reducer = (state, payload) => ({
    ...state,
    caretTopPosition: payload.offset
});

export default {
    [ACTION]: reducer
};