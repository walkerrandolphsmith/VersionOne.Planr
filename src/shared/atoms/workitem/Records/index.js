import { Record } from 'immutable';

export const WorkitemRecord = new Record({
    name: '',
    assetType: '',
    oid: '',
    number: '',
    children: [],
    isSelected: false,
    isHovered: false
});

export const createWorkitemRecord = workitem => new WorkitemRecord({
    name: workitem.Name,
    assetType: workitem._oid.split(':'),
    number: workitem.Number,
    oid: workitem._oid,
    children: workitem.Children.map(child => child._oid)
});