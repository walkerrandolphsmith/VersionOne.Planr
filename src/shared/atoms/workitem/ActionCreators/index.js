import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import selectWorkitemHandler from './selectWorkitem';
import updateWorkitemWithDetailsHandler from './updateWorkitemWithDetails';
import updateWorkitemWithConversationStreamHandler from './updateWorkitemWithConversationStream';
import updateWorkitemWithActivityStreamHandler from './updateWorkitemWithActivityStream';

export const selectWorkitem = createAction(
    Actions.selectWorkitem, selectWorkitemHandler
);
export const hoverWorkitem = createAction(
    Actions.hoverWorkitem, selectWorkitemHandler
);
export const updateWorkitemWithDetails = createAction(
    Actions.updateWorkitemWithDetails, updateWorkitemWithDetailsHandler
);
export const updateWorkitemWithConversationStream = createAction(
    Actions.updateWorkitemWithConversationStream, updateWorkitemWithConversationStreamHandler
);
export const updateWorkitemWithActivityStream = createAction(
    Actions.updateWorkitemWithActivityStream, updateWorkitemWithActivityStreamHandler
);