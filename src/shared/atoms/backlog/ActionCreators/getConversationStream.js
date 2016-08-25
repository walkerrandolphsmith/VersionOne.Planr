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

            const conversations = workitem.MentionedInExpressions.map((expression, i) => {
                const mentions = [];
                for(var j = 0; j < workitem['MentionedInExpressions.Mentions'].length; j++) {
                    const mentionOidToken = workitem['MentionedInExpressions.Mentions'][i + j];
                    if(mentionOidToken) {
                        mentions.push({
                            oid: mentionOidToken,
                            name: workitem['MentionedInExpressions.Mentions.Name'][i + j]
                        });
                    }
                }

                return {
                    oid: expression._oid,
                    content: workitem['MentionedInExpressions.Content'][i],
                    author: {
                        oid: workitem['MentionedInExpressions.Author'][i]._oid,
                        name: workitem['MentionedInExpressions.Author.Name'][i],
                        avatar: workitem['MentionedInExpressions.Author.Avatar.Content'][i]
                    },
                    authorAt: workitem['MentionedInExpressions.AuthoredAt'][i],
                    mentions: mentions
                }
            });

            dispatch(updateWorkitemWithConversationStream(workitemOidToken, conversations));
        })
        .catch(error => {

        });
}