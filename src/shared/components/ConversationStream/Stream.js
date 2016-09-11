import React from 'react';
import { DeleteIcon } from './../Icons';

class Reply extends React.Component {
    render() {
        const {
            authorAvatarHref:url,
            authorName:name,
            authoredAt:time,
            v1Host,
            v1Protocol
        } = this.props;
        const children = this.props.children || <span></span>;
        return (
            <div className="header">
                    <span className="remove-conversation">
                        <DeleteIcon />
                    </span>
                <div className="avatar">
                    <img src={`${v1Protocol}://${v1Host}/${url}`} />
                </div>
                <div className="name">
                    {name}
                </div>
                <span className="when">
                    {time}
                </span>
                {children}
            </div>
        )
    }
}

class Conversation extends React.Component {
    render() {
        const { totalReplies, topic, mostRecentReply } = this.props;
        const participants = this.props.mentionedMembers.map(member => <li key={member.oid}>{member.name}</li>);
        const topicMentions = topic.mentionedAssets.map((mention, i) => <li key={mention.oid} className="mention">{mention.name}</li>);
        const mentions = topic.mentionedAssets.map((mention, i) => <li key={mention.oid} className="mention">{mention.name}</li>);
        const mostRecentReplySection = mostRecentReply
            ? (
                <li className="reply">
                    <Reply {...mostRecentReply} v1Host={this.props.v1Host} v1Protocol={this.props.v1Protocol}/>

                    <div className="details">
                        <div className="details-content">{mostRecentReply.content}</div>
                    </div>
                </li>
              )
            : '';
        return (
            <div className="conversation">
                <div className="conversation-collection">
                    <Reply {...topic} v1Host={this.props.v1Host} v1Protocol={this.props.v1Protocol}>
                        <div>
                            <ul className="participants">{participants}</ul>
                        </div>
                    </Reply>
                    <div className="details">
                        <div className="details-content">{topic.content}</div>
                        <div className="conversation-mentions">
                            <ul>
                                {topicMentions}
                            </ul>
                        </div>
                        <div className="mentions">
                            <ul>
                                {mentions}
                            </ul>
                        </div>
                    </div>
                    <div className="replies">
                        <div className="summary">
                            <div className="expand" dangerouslySetInnerHTML={{__html: '&#x21C5;'}} />
                            <span className="total">
                                    {`${totalReplies} earlier replies`}
                                </span>
                        </div>
                        <ol>
                            {mostRecentReplySection}
                            <li className="start-reply">
                                <input type="text" placeholder="continue the conversation..." />
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export class Stream extends React.Component {
    render() {
        const { v1Host, v1Protocol } = this.props;
        const conversations = this.props.conversations.map(
            (conversation, i) => (
                <Conversation key={i} v1Host={v1Host} v1Protocol={v1Protocol} {...conversation} />
            )
        );
        return (
            <div className="conversation-stream">
                {conversations}
            </div>
        )
    }
}