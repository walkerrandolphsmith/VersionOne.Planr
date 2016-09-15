import * as selectors from './Getters';

import { getActivityStream } from './Setters/activityStream';
import { getConversationStream } from './Setters/conversationStream';
import { selectWorkitem } from './Setters/selectWorkitem';
import { setTab } from './Setters/setTab';
import { getWorkitemDetails } from './Setters/workitemDetails';
import { selectEpic } from './Setters/selectEpic';
import { deSelectEpic } from './Setters/deSelectEpic';
import { lookupEpic } from './Setters/lookupEpic';
import { addStory, addDefect } from './Setters/addWorkitem';
import { updateWorkitem } from './Setters/updateWorkitem';
import { addTest } from './Setters/addTest';
import { deleteTest } from './Setters/deleteTest';
import { setStatus } from './Setters/setStatus';
import { setAuthToken } from './Setters/setAuthToken';
import { getLinks } from './Setters/links';
import { updateTest } from './Setters/updateTest';
import { addLink } from './Setters/addLink';

export const Selectors = selectors;

export const ActionCreators = {
    getActivityStream,
    getConversationStream,
    selectWorkitem,
    setTab,
    getWorkitemDetails,
    selectEpic,
    deSelectEpic,
    lookupEpic,
    addStory,
    addDefect,
    updateWorkitem,
    addTest,
    deleteTest,
    setStatus,
    setAuthToken,
    getLinks,
    updateTest,
    addLink
};
export { default as Reducer } from './Setters';
