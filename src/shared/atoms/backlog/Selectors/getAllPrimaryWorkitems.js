export default state => state
        .backlogStateAtom
        .get('workitems')
        .filter((workitem) => ['Story', 'Defect', 'TestSet'].includes(workitem.assetType[0]));