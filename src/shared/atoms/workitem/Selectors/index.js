import { createSelector } from 'reselect';
import getSelectedWorkitemSelector from './getSelectedWorkitem';
import getAllPrimaryWorkitemsSelector from './getAllPrimaryWorkitems';

export const getSelectedWorkitem = getSelectedWorkitemSelector;
export const getAllPrimaryWorkitems = getAllPrimaryWorkitemsSelector;