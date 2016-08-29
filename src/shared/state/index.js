import * as selectors from './Getters';

import { getActivityStream } from './Setters/activityStream';
import { getConversationStream } from './Setters/conversationStream';
import { hoverWorkitem } from './Setters/hoverWorkitem';
import { selectWorkitem } from './Setters/selectWorkitem';
import { setCaret } from './Setters/setCaret';
import { setTab } from './Setters/setTab';
import { getWorkitemDetails } from './Setters/workitemDetails';
import { setEpic } from './Setters/setEpic';
import { lookupEpic } from './Setters/lookupEpic';
import { addStory, addDefect } from './Setters/addWorkitem';


export const Selectors = selectors;

export const ActionCreators = {
    getActivityStream,
    getConversationStream,
    hoverWorkitem,
    selectWorkitem,
    setCaret,
    setTab,
    getWorkitemDetails,
    setEpic,
    lookupEpic,
    addStory,
    addDefect
};
export { default as Reducer } from './Setters';
