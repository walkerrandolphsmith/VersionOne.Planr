import * as actions from './../Actions';
import _ from 'lodash';

const updateWorkitemWithDetails = {
    [actions.updateWorkitemWithDetails]: (state, action) => {
        let newState = _.cloneDeep(state);
        const wi = action.payload.workitemWithDetails;
        const workitem = newState.workitems[action.payload.workitemWithDetails._oid];

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
        newState.workitems[action.payload.workitemWithDetails._oid] = workitem;
        return newState;
    }
};

export default updateWorkitemWithDetails;