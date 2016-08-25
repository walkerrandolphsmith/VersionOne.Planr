import axios from 'axios';
import { updateWorkitemWithConversationStream } from './index';

export default (workitemOidToken) => (dispatch, getState) => {
    axios.post('/api/query/', {
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
                ID: workitemOidToken
            }
        })
        .then(response => {
            const workitem = response.data;
            dispatch(updateWorkitemWithConversationStream(workitemOidToken, workitem));
        })
        .catch(error => {

        });
}