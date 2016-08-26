export default state => {
    const workitems = [];
    for(var wi in state.backlogStateAtom.workitems) {
        if(['Story', 'Defect', 'TestSet'].includes(state.backlogStateAtom.workitems[wi].assetType[0])){
            workitems.push(state.backlogStateAtom.workitems[wi]);
        }
    }
    return workitems;
}