import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import getWorkitemDetailsHandler from './getWorkitemDetails';
import setCaretPositionHandler from './setCaretPosition';

export const getWorkitemDetails = getWorkitemDetailsHandler;
export const setCaretPosition = createAction(Actions.setCaretPosition, setCaretPositionHandler);
