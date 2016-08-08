import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return v1.query({
        from: 'PrimaryWorkitem',
        select: [
            'Name',
            'Number',
            'Description',
            'ChangeDate',
            'Scope',
            'Scope.Name',
            'BlockingIssues',
            'BlockingIssues.Name',
            'ChangeSets',
            'Estimate',
            'ClassOfService',
            'ClassOfService.Name',
            'Status',
            'Status.Name',
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