import {createAction} from 'redux-actions';
import * as Actions from './../Actions';

import selectWorkitemHandler from './selectWorkitem';

export const selectWorkitem = createAction(Actions.selectWorkitem, selectWorkitemHandler);
export const hoverWorkitem = createAction(Actions.hoverWorkitem, selectWorkitemHandler);