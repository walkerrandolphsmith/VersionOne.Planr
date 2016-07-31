import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import selectWorkitemHandler from './selectWorkitem';
import getWorkitemDetailsHandler from './getWorkitemDetails';
import updateWorkitemWithDetailsHandler from './updateWorkitemWithDetails';

export const selectWorkitem = createAction(Actions.selectWorkitem, selectWorkitemHandler);
export const hoverWorkitem = createAction(Actions.hoverWorkitem, selectWorkitemHandler);
export const getWorkitemDetails = getWorkitemDetailsHandler;
export const updateWorkitemWithDetails = createAction(Actions.updateWorkitemWithDetails, updateWorkitemWithDetailsHandler);