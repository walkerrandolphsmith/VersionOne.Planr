import { createSelector } from 'reselect';

const selectedWISelector = state => state.backlogStateAtom.selected;
const workitemsSelector = state => state.backlogStateAtom.workitems;

const primaryWorkitemsSelector = createSelector(
    [workitemsSelector],
    (workitems) => {
        const primaryWorkitems = [];
        for(var wi in workitems) {
            if(['Story', 'Defect'].includes(workitems[wi].assetType)){
                primaryWorkitems.push(workitems[wi]);
            }
        }
        return primaryWorkitems;
    }
);

export default createSelector(
    [
        primaryWorkitemsSelector,
        selectedWISelector
    ],
    (workitems, selectedWorkitem) => {
        const hyrdatedWorkitems = [];
        for (var wi in workitems) {
            workitems[wi].isSelected = workitems[wi].oid === selectedWorkitem;
            hyrdatedWorkitems.push(workitems[wi]);
        }
        return hyrdatedWorkitems;
    }
);