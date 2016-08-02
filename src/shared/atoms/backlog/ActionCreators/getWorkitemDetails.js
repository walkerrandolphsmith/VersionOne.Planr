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


            const owners = workitem.Owners.map((owner, i) => {
                return {
                    oid: owner._oid,
                    name: workitem['Owners.Name'][i],
                    avatar: workitem['Owners.Avatar.Content'][i]
                };
            });

            const blockingIssues = workitem.BlockingIssues.map((blockingIssue, i) => {
                return {
                    oid: blockingIssue._oid,
                    name: workitem['BockingIssues.Name'][i]
                }
            });

            const classOfService = {
                oid: workitem.ClassOfService._oid,
                name: workitem['ClassOfService.Name']
            };

            const scope = {
                oid: workitem.Scope._oid,
                name: workitem['Scope.Name']
            };

            let workitemWithDetails = WorkitemRecords.createWorkitemRecord(workitem);
            workitemWithDetails = workitemWithDetails.set('owners', owners);
            workitemWithDetails = workitemWithDetails.set('scope', scope);
            workitemWithDetails = workitemWithDetails.set('classOfService', classOfService);
            workitemWithDetails = workitemWithDetails.set('blockingIssues', blockingIssues);

            dispatch(WorkitemActions.updateWorkitemWithDetails(workitemWithDetails));
        })
        .catch(error => {

        });
}