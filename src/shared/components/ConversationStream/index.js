import React from 'react';
import { StreamHeader } from './StreamHeader';
import { Stream } from './Stream';

export class ConversationStream extends React.Component {
    componentWillMount() {
        this.props.getConversationStream(this.props.oid);
    }

    render() {
        return (
            <div className="main conversation-container">
                <StreamHeader />
                <Stream />
            </div>
        )
    }
}