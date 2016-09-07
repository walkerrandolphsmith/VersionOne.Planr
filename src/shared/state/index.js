import * as selectors from './Getters';

import { getActivityStream } from './Setters/activityStream';
import { getConversationStream } from './Setters/conversationStream';
import { selectWorkitem } from './Setters/selectWorkitem';
import { setTab } from './Setters/setTab';
import { getWorkitemDetails } from './Setters/workitemDetails';
import { setEpic } from './Setters/setEpic';
import { unSetEpic } from './Setters/unSetEpic';
import { lookupEpic } from './Setters/lookupEpic';
import { addStory, addDefect } from './Setters/addWorkitem';
import { updateWorkitem } from './Setters/updateWorkitem';
import { addTest } from './Setters/addTest';
import { deleteTest } from './Setters/deleteTest';
import { setStatus } from './Setters/setStatus';
import { setAuthToken } from './Setters/setAuthToken';
import { getLinks } from './Setters/links';
import { updateTest } from './Setters/updateTest';

export const Selectors = selectors;

export const ActionCreators = {
    getActivityStream,
    getConversationStream,
    selectWorkitem,
    setTab,
    getWorkitemDetails,
    setEpic,
    unSetEpic,
    lookupEpic,
    addStory,
    addDefect,
    updateWorkitem,
    addTest,
    deleteTest,
    setStatus,
    setAuthToken,
    getLinks,
    updateTest
};
export { default as Reducer } from './Setters';
