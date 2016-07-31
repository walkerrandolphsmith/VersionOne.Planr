export default state => state
        .workitemStateAtom
        .get('workitems')
        .filter((workitem) => ['Story', 'Defect', 'TestSet'].includes(workitem.assetType[0]));