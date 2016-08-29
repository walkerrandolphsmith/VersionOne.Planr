import * as selectors from './Getters';

import { getActivityStream } from './Setters/activityStream';
import { getConversationStream } from './Setters/conversationStream';
import { selectWorkitem } from './Setters/selectWorkitem';
import { setCaret } from './Setters/setCaret';
import { setTab } from './Setters/setTab';
import { getWorkitemDetails } from './Setters/workitemDetails';
import { setEpic } from './Setters/setEpic';
import { unSetEpic } from './Setters/unSetEpic';
import { lookupEpic } from './Setters/lookupEpic';
import { addStory, addDefect } from './Setters/addWorkitem';
import { updateWorkitem } from './Setters/updateWorkitem';
import { addTest } from './Setters/addTest';

export const Selectors = selectors;

export const ActionCreators = {
    getActivityStream,
    getConversationStream,
    selectWorkitem,
    setCaret,
    setTab,
    getWorkitemDetails,
    setEpic,
    unSetEpic,
    lookupEpic,
    addStory,
    addDefect,
    updateWorkitem,
    addTest
};
export { default as Reducer } from './Setters';
