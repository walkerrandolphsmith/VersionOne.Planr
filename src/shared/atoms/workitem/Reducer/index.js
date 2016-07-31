import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import selectWorkitem from './selectWorkitem';

const reducer = [
    selectWorkitem
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    workitems: new Map(),
    selected: ''
});

export default createReducer(DEFAULT_STATE, reducer);