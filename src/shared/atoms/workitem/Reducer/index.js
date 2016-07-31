import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import selectWorkitem from './selectWorkitem';
import hoverWorkitem from './hoverWorkitem';
import updateWorkitemWithDetails from './updateWorkitemWithDetails';

const reducer = [
    selectWorkitem,
    hoverWorkitem,
    updateWorkitemWithDetails
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    workitems: new Map(),
    selected: '',
    hovered: ''
});

export default createReducer(DEFAULT_STATE, reducer);