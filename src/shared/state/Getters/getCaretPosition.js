import { createSelector } from 'reselect';
import getAllPrimaryWokritemSelector from './getAllPrimaryWorkitems';

export default createSelector(
    [getAllPrimaryWokritemSelector],
    (primaryWorkitems) => primaryWorkitems.findIndex(wi => wi.isSelected) || 0
)

