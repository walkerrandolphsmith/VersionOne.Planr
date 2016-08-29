import { createAction } from 'redux-actions';
import axios from 'axios';
import { setCaret } from './setCaret';
import { selectWorkitem } from './selectWorkitem';

const ACTION = 'GET_WORKITEM_DETAILS';

const success = createAction(
    ACTION,
    workitemWithDetails => ({workitemWithDetails})
);

export const getWorkitemDetails = (i, workitemOidToken) => (dispatch, getState) => {
    dispatch(setCaret(i));
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
            const workitem = response.data[0][0];
            dispatch(success(workitem));
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    const wi = payload.workitemWithDetails;
    const workitem = state.workitems[payload.workitemWithDetails._oid];

    workitem.scope = {
        oid: wi.Scope._oid,
        name: wi['Scope.Name']
    };

    workitem.iteration = {
        oid: wi.Timebox._oid,
        name: wi['Timebox.Name']
    };

    workitem.team = {
        oid: wi.Team._oid,
        name: wi['Team.Name']
    };

    workitem.epic = {
        oid: wi.Super._oid,
        name: wi['Super.Name']
    };

    workitem.status = {
        oid: wi.Status._oid,
        name: wi['Status.Name']
    };

    workitem.changedBy = {
        oid: wi.ChangedBy._oid,
        name: wi['ChangedBy.Name']
    };

    workitem.createdBy = {
        oid: wi.CreatedBy._oid,
        name: wi['CreatedBy.Name']
    };

    workitem.priority = {
        oid: wi.Priority._oid,
        name: wi['Priority.Name']
    };

    workitem.classOfService = {
        oid: wi.ClassOfService._oid,
        name: wi['ClassOfService.Name']
    };

    workitem.blockingIssues = wi.BlockingIssues.map((blockingIssue, i) => {
        return {
            oid: blockingIssue._oid,
            name: wi['BockingIssues.Name'][i]
        }
    });

    workitem.owners = wi.Owners.map((owner, i) => {
        return {
            oid: owner._oid,
            name: wi['Owners.Name'][i],
            avatar: wi['Owners.Avatar.Content'][i]
        };
    });

    workitem.description = wi.Description;
    workitem.changeDate = wi.ChangeDate;
    workitem.createDate = wi.CreateDate;
    workitem.estimate = wi.Estimate;

    state.workitems[payload.workitemWithDetails._oid] = workitem;
    return { ...state };
};

export default {
    [ACTION]: reducer
};

