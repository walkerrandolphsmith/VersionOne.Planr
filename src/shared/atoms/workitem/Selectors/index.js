import { createSelector } from 'reselect';
import getSelectedWorkitemSelector from './getSelectedWorkitem';
import getHoveredWorkitemSelector from './getHoveredWorkitem';
import getAllPrimaryWorkitemsSelector from './getAllPrimaryWorkitems';

export const getSelectedWorkitem = getSelectedWorkitemSelector;
export const getHoveredWorkitem = getHoveredWorkitemSelector;
export const getAllPrimaryWorkitems = getAllPrimaryWorkitemsSelector;