import setCaret from './setCaret';
import setTab from './setTab';
import selectWorkitem from './selectWorkitem';
import setWorkitemDetails from './workitemDetails';
import setConversationStream from './conversationStream';
import setActivityStream from './activityStream';
import setEpic from './setEpic';
import lookupEpic from './lookupEpic';
import addWorkitem from './addWorkitem';
import updateWorkitem from './updateWorkitem';

const handlers = [
    setCaret,
    setTab,
    selectWorkitem,
    setWorkitemDetails,
    setConversationStream,
    setActivityStream,
    setEpic,
    lookupEpic,
    addWorkitem,
    updateWorkitem
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = {
    caretTopPosition: 0,
    tab: 0,
    workitems: {},
    selected: '',
    epic: '',
    epicLookupResults: []
};

export default (state = DEFAULT_STATE, action = {}) => {
    // Merge with items populated on server
    if(state != DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    const { type, payload } = action;

    return handlers[type] ? handlers[type](state, payload) : state;
}