import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import getWorkitemDetailsHandler from './getWorkitemDetails';
import setCaretPositionHandler from './setCaretPosition';
import setTabHandler from './setTab';
import getConversationStreamHandler from './getConversationStream';

export const getWorkitemDetails = getWorkitemDetailsHandler;
export const setCaretPosition = createAction(Actions.setCaretPosition, setCaretPositionHandler);
export const setTab = createAction(Actions.setTab, setTabHandler);
export const getConversationStream = getConversationStreamHandler;