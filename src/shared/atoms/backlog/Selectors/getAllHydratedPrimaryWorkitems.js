export default (workitems, selectedWorkitem, hoveredWorkitem) => {
    for(var wi in workitems) {
        workitems[wi].isSelected = workitems[wi].oid === selectedWorkitem;
        workitems[wi].isHovered = workitems[wi].oid === hoveredWorkitem
    }
    return workitems;
}

