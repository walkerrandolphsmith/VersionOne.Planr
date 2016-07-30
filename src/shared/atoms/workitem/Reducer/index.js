import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';

const reducer = [

].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    workitems: new Map()
});

export default createReducer(DEFAULT_STATE, reducer);