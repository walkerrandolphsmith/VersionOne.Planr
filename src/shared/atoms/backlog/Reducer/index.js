import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import setCaretPosition from './setCaretPosition';

const reducer = [
    setCaretPosition
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    caretTopPosition: 0
});

export default createReducer(DEFAULT_STATE, reducer);