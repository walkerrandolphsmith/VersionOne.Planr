import { createSelector } from 'reselect';
import { Selectors as WorkitemSelectors } from './../../workitem';
import getAllHydratedWorkitemSelector from './getAllHydratedPrimaryWorkitems'

export const getAllPrimaryWorkitems = createSelector(
    [
        WorkitemSelectors.getAllPrimaryWorkitems,
        WorkitemSelectors.getSelectedWorkitem,
        WorkitemSelectors.getHoveredWorkitem
    ],
    getAllHydratedWorkitemSelector
);