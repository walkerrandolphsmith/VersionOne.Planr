import axios from 'axios';
import { ActionCreators as WorkitemActions } from './../../workitem';

export default (workitemOidToken) => (dispatch, getState) => {
    axios
        .get(`/api/conversation-stream/${workitemOidToken.replace(':', '-')}`)
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

            dispatch(WorkitemActions.updateWorkitemWithConversationStream(workitemOidToken, conversations));
        })
        .catch(error => {

        });
}