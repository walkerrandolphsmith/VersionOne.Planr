import React from 'react';
import { Expression } from './Expression';

export class ConversationStream extends React.Component {
    componentWillMount() {
        this.props.getConversationStream(this.props.oid);
    }

    render() {
        return (
            <div className="conversation-stream">
                <ul>
                    {this.props.conversations.map((e, i) => <Expression key={i} {...e} />)}
                </ul>
            </div>
        )
    }
}