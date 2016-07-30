export default state => state.workitemStateAtom
    .get('workitems')
    .filter((workitem) => workitem
        .get('assetType') === 'Story'
        || workitem.get('assetType') === 'Defect'
        || workitem.get('assetType') === 'TestSet'
    );