const groupBy= pred => l => l.map(a => {
    return {
        [pred(a)]: a
    };
}).reduce((a,b) => {
    for(var key in b) {
        if(a[key]){
            a[key].push(b[key])
        } else {
            a[key] = [b[key]]
        }
    }
    return a;
}, {});

export default state => {
    const workitem = state.atom.workitems[state.atom.selected];

    const activity = (workitem.activity || []).map((activity) => {
        if(activity.body.verb === 'Created'){
            activity.body.target = activity.body.target.filter((target) => target.newValue !== '');
        }
        return activity;
    });

    const groupByDate = groupBy(activity => activity.body.time.split('T')[0]);
    const activityGroupedByDate = groupByDate(activity);
    return activityGroupedByDate;
};