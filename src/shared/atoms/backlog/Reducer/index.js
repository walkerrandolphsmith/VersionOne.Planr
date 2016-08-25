import createReducer from './../../../store/createReducer';
import { Map } from 'immutable';
import setCaretPosition from './setCaretPosition';
import setTab from './setTab';
import selectWorkitem from './selectWorkitem';
import hoverWorkitem from './hoverWorkitem';
import updateWorkitemWithDetails from './updateWorkitemWithDetails';
import updateWorkitemWithConversationStream from './updateWorkitemWithConversationStream';
import updateWorkitemWithActivityStream from './updateWorkitemWithActivityStream';

const reducer = [
    setCaretPosition,
    setTab,
    selectWorkitem,
    hoverWorkitem,
    updateWorkitemWithDetails,
    updateWorkitemWithConversationStream,
    updateWorkitemWithActivityStream
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = new Map({
    caretTopPosition: 0,
    tab: 0,
    workitems: new Map(),
    selected: '',
    hovered: ''
});

export default createReducer(DEFAULT_STATE, reducer);