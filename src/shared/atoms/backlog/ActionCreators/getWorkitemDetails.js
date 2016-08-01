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
            const workitems = response.data;

            const owners = workitems.Owners.map((owner, i) => {
                return {
                    oid: owner._oid,
                    name: workitems['Owners.Name'][i],
                    avatar: workitems['Owners.Avatar.Content'][i]
                };
            });

            const blockingIssues = workitems.BlockingIssues.map((blockingIssue, i) => {
                return {
                    oid: blockingIssue._oid,
                    name: workitems['BockingIssues.Name'][i]
                }
            });

            const classOfService = {
                oid: workitems.ClassOfService._oid,
                name: workitems['ClassOfService.Name']
            };

            const scope = {
                oid: workitems.Scope._oid,
                name: workitems['Scope.Name']
            };

            debugger;

            const workitemWithDetails = WorkitemRecords.createWorkitemRecord(workitems);
            dispatch(WorkitemActions.updateWorkitemWithDetails(workitemWithDetails));
        })
        .catch(error => {

        });
}