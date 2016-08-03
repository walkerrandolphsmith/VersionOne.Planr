import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import setCaretPosition from './setCaretPosition';
import setTab from './setTab';

const reducer = [
    setCaretPosition,
    setTab
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    caretTopPosition: 0,
    tab: 0
});

export default createReducer(DEFAULT_STATE, reducer);