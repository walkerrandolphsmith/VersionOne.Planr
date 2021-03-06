import setTab from './setTab';
import selectWorkitem from './selectWorkitem';
import setWorkitemDetails from './workitemDetails';
import setConversationStream from './conversationStream';
import setActivityStream from './activityStream';
import selectEpic from './selectEpic';
import deSelectEpic from './deSelectEpic';
import lookupEpic from './lookupEpic';
import addWorkitem from './addWorkitem';
import updateWorkitem from './updateWorkitem';
import addTest from './addTest';
import deleteTest from './deleteTest';
import setStatus from './setStatus';
import setLinks from './links';
import setUser from './setAuthToken';
import updateTest from './updateTest';
import addLink from './addLink';

const handlers = [
    setTab,
    selectWorkitem,
    setWorkitemDetails,
    setConversationStream,
    setActivityStream,
    selectEpic,
    deSelectEpic,
    lookupEpic,
    addWorkitem,
    updateWorkitem,
    addTest,
    deleteTest,
    setStatus,
    setLinks,
    setUser,
    updateTest,
    addLink
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = {
    v1Protocol: '',
    v1Host: '',
    v1Instance: '',
    packageNumber: '0.0.0.0000',
    currentDetailsTab: 0,
    currentTestsTab: 0,
    workitems: {},
    selected: '',
    epic: '',
    epicLookupResults: [],
    currentUser: '',
    recentlyAddedTest: false
};

export default (state = DEFAULT_STATE, action = {}) => {
    const { type, payload } = action;
    if(state !== DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    return handlers[type] ? handlers[type](state, payload) : state;
}