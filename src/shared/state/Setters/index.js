import setCaret from './setCaret';
import setTab from './setTab';
import selectWorkitem from './selectWorkitem';
import hoverWorkitem from './hoverWorkitem';
import setWorkitemDetails from './workitemDetails';
import setConversationStream from './conversationStream';
import setActivityStream from './activityStream';
import setEpic from './setEpic';

const handlers = [
    setCaret,
    setTab,
    selectWorkitem,
    hoverWorkitem,
    setWorkitemDetails,
    setConversationStream,
    setActivityStream,
    setEpic
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = {
    caretTopPosition: 0,
    tab: 0,
    workitems: {},
    selected: '',
    hovered: '',
    epic: ''
};

export default (state = DEFAULT_STATE, action = {}) => {
    // Merge with items populated on server
    if(state != DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    const { type, payload } = action;

    return handlers[type] ? handlers[type](state, payload) : state;
}