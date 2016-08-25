import { Iterable, Map } from 'immutable';
import { Records } from './../atoms/backlog';

export default (defaultState, handlers) => (state = defaultState, action) => {

    if (Iterable.isIterable(defaultState)) {
        let deepState = state;
        if(state.workitems) {
            deepState = new Map({
               workitems: new Map(state.workitems).map(wi => new Records.WorkitemRecord(wi))
            });
        }
        state = defaultState.mergeDeep(deepState);
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