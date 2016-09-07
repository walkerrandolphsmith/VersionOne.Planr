import { createAction } from 'redux-actions';

const ACTION = 'SET_CARET';

export const setCaret = createAction(
    ACTION,
    (index) => ({ index })
);

const reducer = (state, payload) => ({
    ...state,
    caretTopPosition: payload.index
});

export default {
    [ACTION]: reducer
};

