import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import getWorkitemDetailsHandler from './getWorkitemDetails';
import setCaretPositionHandler from './setCaretPosition';
import setTabHandler from './setTab';
import getConversationStreamHandler from './getConversationStream';
import getActivityStreamHandler from './getActivityStream';
import selectWorkitemHandler from './selectWorkitem';
import updateWorkitemWithDetailsHandler from './updateWorkitemWithDetails';
import updateWorkitemWithConversationStreamHandler from './updateWorkitemWithConversationStream';
import updateWorkitemWithActivityStreamHandler from './updateWorkitemWithActivityStream';

export const getWorkitemDetails = getWorkitemDetailsHandler;
export const getConversationStream = getConversationStreamHandler;
export const getActivityStream = getActivityStreamHandler;
export const setCaretPosition = createAction(Actions.setCaretPosition, setCaretPositionHandler);
export const setTab = createAction(Actions.setTab, setTabHandler);

export const selectWorkitem = createAction(Actions.selectWorkitem, selectWorkitemHandler);
export const hoverWorkitem = createAction(Actions.hoverWorkitem, selectWorkitemHandler);
export const updateWorkitemWithDetails = createAction(Actions.updateWorkitemWithDetails, updateWorkitemWithDetailsHandler);
export const updateWorkitemWithConversationStream = createAction(Actions.updateWorkitemWithConversationStream, updateWorkitemWithConversationStreamHandler);
export const updateWorkitemWithActivityStream = createAction(Actions.updateWorkitemWithActivityStream, updateWorkitemWithActivityStreamHandler);