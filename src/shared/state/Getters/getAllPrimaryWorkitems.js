import { createSelector } from 'reselect';

const selectedWISelector = state => state.backlogStateAtom.selected;
const workitemsSelector = state => state.backlogStateAtom.workitems;

const primaryWorkitemsSelector = createSelector(
    [workitemsSelector],
    (workitems) => {
        const primaryWorkitems = {};
        for(var wi in workitems) {
            if(['Story', 'Defect'].includes(workitems[wi].assetType)){
                primaryWorkitems[wi] = workitems[wi];
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
        const lang = window.navigator.userLanguage || window.navigator.language;
        const hyrdatedWorkitems = [];
        for (var wi in workitems) {
            workitems[wi].isSelected = workitems[wi].oid === selectedWorkitem;
            workitems[wi].tests = (workitems[wi].tests || []).sort(sortByNewest);
            hyrdatedWorkitems.push(workitems[wi]);
        }

        return hyrdatedWorkitems;
    }
);

const sortByNewest = (current, next) => {
    if(current.oid === next.oid) {
        return 0;
    } else if(current.oid > next.oid) {
        return -1;
    } else {
        return 1;
    }
};