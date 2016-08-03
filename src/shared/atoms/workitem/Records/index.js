import { Record } from 'immutable';

export const WorkitemRecord = new Record({
    oid: '',
    assetType: '',
    number: '',
    name: '',
    scope: '',
    changeDate: '',
    classOfService: '',
    estimate: '',
    status: '',
    blockingIssues: [],
    owners: [],
    children: [],
    conversations: [],
    activity: [],
    isSelected: false,
    isHovered: false
});

export const createWorkitemRecord = wi => new WorkitemRecord({
    //Scalar
    oid: wi._oid,
    assetType: wi._oid.split(':'),
    number: wi.Number,
    name: wi.Name,
    changeDate: wi.ChangeDate,
    estimate: wi.Estimate,
    //Single Value Relations
    scope: wi.Scope? wi.Scope._oid : '',
    status: wi.Status ? wi.Status._oid : '',
    classOfService: wi.ClassOfService ? wi.ClassOfService._oid : '',
    //Multivalue relation
    blockingIssues: wi.BlockingIssues ? wi.BlockingIssues.map(bi => bi._oid) : [],
    Owners: wi.Owners ? wi.Owners.map(bi => bi._oid) : [],
    children: wi.Children.map(child => child._oid)
});