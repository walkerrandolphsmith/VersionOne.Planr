import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return v1.query({
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
            ID: oid
        }
    }).then(response => {
        return response.data[0][0];
    });
}