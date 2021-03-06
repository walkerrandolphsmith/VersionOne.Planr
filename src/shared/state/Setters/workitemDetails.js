import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'GET_WORKITEM_DETAILS';

const success = createAction(
    ACTION,
    workitemWithDetails => ({workitemWithDetails})
);

export const getWorkitemDetails = (workitemOidToken) => (dispatch, getState) => {
    axios.post('/api/query/', {
            from: 'PrimaryWorkitem',
            select: [
                'Number',
                'Name',
                'AssetType',
                'Description',
                'Scope',
                'Scope.Name',
                'Super',
                'Super.Name',
                'Estimate',
                'Status',
                'Status.Name',
                'Children',
                'Children.Name',
                'Children.Number',
                'Children.AssetType',
                'Children.AssetState',
                "Scope.Scheme.SelectedValues",
                "Scope.Scheme.SelectedValues.Name"
            ],
            where: {
                ID: workitemOidToken
            }
        })
        .then(response => {
            let workitem = response.data[0][0];
            axios.post('/api/query', {
                from: 'StoryStatus',
                select: [
                    'SelectedInSchemes'
                ]
            }).then(nestedResponse => {
                const allStatuses = nestedResponse.data[0];
                workitem = formatWorkitem(workitem);
                const visibleStatuses = workitem.visibleListsTypesValues.filter((value, i) => allStatuses.find(status => status._oid === value.oid));
                workitem.statuses = workitem.statuses.concat(visibleStatuses);
                dispatch(success(workitem));
            }).catch(err => {
                //Even if we fail to get statuses we still want to update other details
                workitem = formatWorkitem(workitem);
                dispatch(success(workitem));
            });
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitemWithDetails.oid] = payload.workitemWithDetails;
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

const formatWorkitem = (wi) => {
    const workitem = {};
    workitem.oid = wi._oid;
    workitem.name = wi.Name;
    workitem.number = wi.Number;
    workitem.assetType = wi.AssetType;
    workitem.description = wi.Description;
    workitem.estimate = wi.Estimate;

    workitem.scope = {
        oid: wi.Scope._oid,
        name: wi['Scope.Name']
    };

    workitem.epic = {
        oid: wi.Super._oid,
        name: wi['Super.Name']
    };

    workitem.status = {
        oid: wi.Status._oid,
        name: wi['Status.Name'] || 'None'
    };

    workitem.statuses = [{ oid: 'NULL', name: 'None' }];

    workitem.children = wi.Children.map((child, i) => {
        return {
            oid: child._oid,
            assetType: wi['Children.AssetType'][i],
            assetState: wi['Children.AssetState'][i],
            name: wi['Children.Name'][i],
            number: wi['Children.Number'][i]
        };
    });

    workitem.tests = workitem.children.filter(child => child.assetType === 'Test' && child.assetState == 'Active');

    workitem.visibleListsTypesValues = wi['Scope.Scheme.SelectedValues'].map((status, i) => ({
        oid: wi['Scope.Scheme.SelectedValues'][i]._oid,
        name: wi['Scope.Scheme.SelectedValues.Name'][i]
    }));

    return workitem;
};
