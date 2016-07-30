import { Iterable } from 'immutable';

export default (defaultState, handlers) => (state = defaultState, action) => {
    if (Iterable.isIterable(defaultState)) {
        state = defaultState.mergeDeep(state);
    }
    else if (state !== defaultState) {
        state = Object.assign({}, defaultState, state);
    }
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    }
    else {
        return state;
    }
};