import * as selectors from './Getters';

import { getActivityStream } from './Setters/activityStream';
import { getConversationStream } from './Setters/conversationStream';
import { hoverWorkitem } from './Setters/hoverWorkitem';
import { selectWorkitem } from './Setters/selectWorkitem';
import { setCaret } from './Setters/setCaret';
import { setTab } from './Setters/setTab';
import { getWorkitemDetails } from './Setters/workitemDetails';




export const Selectors = selectors;

export const ActionCreators = {
    getActivityStream,
    getConversationStream,
    hoverWorkitem,
    selectWorkitem,
    setCaret,
    setTab,
    getWorkitemDetails
};
export { default as Reducer } from './Setters';
