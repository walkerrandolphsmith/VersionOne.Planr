import { createSelector } from 'reselect';
import moment from 'moment';

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
        moment.locale(lang);
        const hyrdatedWorkitems = [];
        for (var wi in workitems) {
            const changeDate = new Date(workitems[wi].changeDate);
            const createDate = new Date(workitems[wi].createDate);
            workitems[wi].formattedChangeDate = moment(changeDate).format('MM/DD/YY LT');
            workitems[wi].formattedCreateDate = moment(createDate).format('MM/DD/YY LT');
            workitems[wi].isSelected = workitems[wi].oid === selectedWorkitem;
            workitems[wi].tests = (workitems[wi].tests || []).sort((current, next) => {
                if(current.oid === next.oid) {
                    return 0;
                } else if(current.oid > next.oid) {
                    return -1;
                } else {
                    return 1;
                }
            });
            hyrdatedWorkitems.push(workitems[wi]);
        }
        return hyrdatedWorkitems;
    }
);