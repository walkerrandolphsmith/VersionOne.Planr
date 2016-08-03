import React from 'react';

export class ConversationStream extends React.Component {
    render() {

        const { conversations } = this.props.workitem;

        const conversationsStream =  conversations.map(expression => (
            <div key={expression.oid}>
                <div>Author: {expression.author.name}</div>
                <div>Authored At: {expression.authorAt}</div>
                <div>{expression.content}</div>
            </div>
        ));

        return (
            <div>
                {conversationsStream}
            </div>
        )
    }
}