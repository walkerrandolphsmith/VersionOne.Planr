import axios from 'axios';
import { selectWorkitem, updateWorkitemWithDetails } from './index';

import { setCaretPosition } from './index';

export default (i, workitemOidToken) => (dispatch, getState) => {
    dispatch(setCaretPosition(i));
    dispatch(selectWorkitem(workitemOidToken));
    axios.post('/api/query/', {
            from: 'PrimaryWorkitem',
            select: [
                'Number',
                'Name',
                'Description',
                'Scope',
                'Scope.Name',
                'Timebox',
                'Timebox.Name',
                'Team',
                'Team.Name',
                'Super',
                'Super.Name',
                'ChangeDate',
                'ChangedBy',
                'ChangedBy.Name',
                'CreateDate',
                'CreatedBy',
                'CreatedBy.Name',
                'Priority',
                'Priority.Name',
                'ClassOfService',
                'ClassOfService.Name',
                'Estimate',
                'Status',
                'Status.Name',
                'BlockingIssues',
                'BlockingIssues.Name',
                'Owners',
                'Owners.Name',
                'Owners.Avatar',
                'Owners.Avatar.Content',
                'Children'
            ],
            where: {
                ID: workitemOidToken
            }
        })
        .then(response => {
            const workitem = response.data;
            dispatch(updateWorkitemWithDetails(workitem));
        })
        .catch(error => {
            console.log("<--------------()-------------->");
            console.log(error);
        });
}