import { createSelector } from 'reselect';
import getAllHydratedWorkitemSelector from './getAllHydratedPrimaryWorkitems';
import getSelectedWorkitemSelector from './getSelectedWorkitem';
import getHoveredWorkitemSelector from './getHoveredWorkitem';
import getAllPrimaryWorkitemsSelector from './getAllPrimaryWorkitems';
import getActivityStreamGroupedByDateSelector from './getActivityStreamGroupedByDate';

export const getActivityStreamGroupedByDate = getActivityStreamGroupedByDateSelector;

export const getAllPrimaryWorkitems = createSelector(
    [
        getAllPrimaryWorkitemsSelector,
        getSelectedWorkitemSelector,
        getHoveredWorkitemSelector
    ],
    getAllHydratedWorkitemSelector
);