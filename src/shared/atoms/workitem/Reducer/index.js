import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import selectWorkitem from './selectWorkitem';
import hoverWorkitem from './hoverWorkitem';
import updateWorkitemWithDetails from './updateWorkitemWithDetails';
import updateWorkitemWithConversationStream from './updateWorkitemWithConversationStream';
import updateWorkitemWithActivityStream from './updateWorkitemWithActivityStream';

const reducer = [
    selectWorkitem,
    hoverWorkitem,
    updateWorkitemWithDetails,
    updateWorkitemWithConversationStream,
    updateWorkitemWithActivityStream
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    workitems: new Map(),
    selected: '',
    hovered: ''
});

export default createReducer(DEFAULT_STATE, reducer);