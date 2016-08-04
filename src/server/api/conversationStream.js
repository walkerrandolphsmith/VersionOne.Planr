import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return v1.query({
        from: 'PrimaryWorkitem',
        select: [
            'MentionedInExpressions',
            'MentionedInExpressions.Content',
            'MentionedInExpressions.Author',
            'MentionedInExpressions.Author.Name',
            'MentionedInExpressions.Author.Avatar.Content',
            'MentionedInExpressions.AuthoredAt',
            'MentionedInExpressions.Mentions',
            'MentionedInExpressions.Mentions.Name'
        ],
        where: {
            ID: oid
        }
    }).then(response => {
        return response.data[0][0];
    });
}