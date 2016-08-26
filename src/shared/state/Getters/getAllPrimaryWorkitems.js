import { createSelector } from 'reselect';

const hoveredWISelector = state => state.backlogStateAtom.hovered;
const selectedWISelector = state => state.backlogStateAtom.selected;
const workitemsSelector = state => state.backlogStateAtom.workitems;

const primaryWorkitemsSelector = createSelector(
    [workitemsSelector],
    (workitems) => {
        const primaryWorkitems = [];
        for(var wi in workitems) {
            if(['Story', 'Defect', 'TestSet'].includes(workitems[wi].assetType[0])){
                primaryWorkitems.push(workitems[wi]);
            }
        }
        return primaryWorkitems;
    }
);

export default createSelector(
    [
        primaryWorkitemsSelector,
        selectedWISelector,
        hoveredWISelector
    ],
    (workitems, selectedWorkitem, hoveredWorkitem) => {
        const hyrdatedWorkitems = [];
        for (var wi in workitems) {
            workitems[wi].isSelected = workitems[wi].oid === selectedWorkitem;
            workitems[wi].isHovered = workitems[wi].oid === hoveredWorkitem;
            hyrdatedWorkitems.push(workitems[wi]);
        }
        return hyrdatedWorkitems;
    }
);