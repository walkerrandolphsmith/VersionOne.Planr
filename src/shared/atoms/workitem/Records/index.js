import { Record } from 'immutable';

export const WorkitemRecord = new Record({
    name: '',
    oid: '',
    number: '',
    children: []
});

export const createWorkitemRecord = workitem => new WorkitemRecord({
    name: workitem.Name,
    number: workitem.Number,
    oid: workitem._oid,
    children: workitem.Children.map(child => child._oid)
});