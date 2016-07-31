import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import selectWorkitem from './selectWorkitem';
import hoverWorkitem from './hoverWorkitem';

const reducer = [
    selectWorkitem,
    hoverWorkitem
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    workitems: new Map(),
    selected: '',
    hovered: ''
});

export default createReducer(DEFAULT_STATE, reducer);