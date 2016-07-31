export default (workitems, selectedWorkitem) => workitems.map(wi => wi.mergeDeep({
    isSelected: wi.oid === selectedWorkitem
}));

