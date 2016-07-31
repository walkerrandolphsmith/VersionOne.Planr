export default (workitems, selectedWorkitem, hoveredWorkitem) => workitems.map(wi => wi.mergeDeep({
    isSelected: wi.oid === selectedWorkitem,
    isHovered: wi.oid === hoveredWorkitem
}));

