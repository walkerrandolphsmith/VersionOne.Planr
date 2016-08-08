import axios from 'axios';
import { ActionCreators as WorkitemActions } from './../../workitem';
import { Records as WorkitemRecords } from './../../workitem';

import { setCaretPosition } from './index';

export default (i, workitemOidToken) => (dispatch, getState) => {
    dispatch(setCaretPosition(i));
    dispatch(WorkitemActions.selectWorkitem(workitemOidToken));
    axios
        .get(`/api/workitem/${workitemOidToken.replace(':', '-')}`)
        .then(response => {
            const workitem = response.data;

            const scope = {
                oid: workitem.Scope._oid,
                name: workitem['Scope.Name']
            };

            const iteration = {
                oid: workitem.Timebox._oid,
                name: workitem['Timebox.Name']
            };

            const team = {
                oid: workitem.Team._oid,
                name: workitem['Team.Name']
            };

            const epic = {
                oid: workitem.Super._oid,
                name: workitem['Super.Name']
            };

            const status = {
                oid: workitem.Status._oid,
                name: workitem['Status.Name']
            };

            const changedBy = {
                oid: workitem.ChangedBy._oid,
                name: workitem['ChangedBy.Name']
            };

            const createdBy = {
                oid: workitem.CreatedBy._oid,
                name: workitem['CreatedBy.Name']
            };

            const priority = {
                oid: workitem.Priority._oid,
                name: workitem['Priority.Name']
            };

            const classOfService = {
                oid: workitem.ClassOfService._oid,
                name: workitem['ClassOfService.Name']
            };

            const blockingIssues = workitem.BlockingIssues.map((blockingIssue, i) => {
                return {
                    oid: blockingIssue._oid,
                    name: workitem['BockingIssues.Name'][i]
                }
            });

            const owners = workitem.Owners.map((owner, i) => {
                return {
                    oid: owner._oid,
                    name: workitem['Owners.Name'][i],
                    avatar: workitem['Owners.Avatar.Content'][i]
                };
            });

            const workitemWithDetails = WorkitemRecords.createWorkitemRecord(workitem)
                .set('scope', scope)
                .set('iteration', iteration)
                .set('team', team)
                .set('epic', epic)
                .set('status', status)
                .set('changedBy', changedBy)
                .set('createdBy', createdBy)
                .set('priority', priority)
                .set('classOfService', classOfService)
                .set('blockingIssues', blockingIssues)
                .set('owners', owners);

            dispatch(WorkitemActions.updateWorkitemWithDetails(workitemWithDetails));
        })
        .catch(error => {
            console.log("<--------------()-------------->");
            console.log(error);
        });
}