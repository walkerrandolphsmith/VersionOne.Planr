import React from 'react';
import { DeleteIcon } from './../Icons';

class Reply extends React.Component {
    static defaultProps = {
        url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
        name: "Administrator",
        time: 'about 2 hours ago',
        participants: [],
        total: 0
    };

    render() {
        const { url, name, time, children } = this.props;
        return (
            <div className="header">
                    <span className="remove-conversation">
                        <DeleteIcon />
                    </span>
                <div className="avatar">
                    <img src={url} />
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

export class Expression extends React.Component {
    static defaultProps = {
        url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
        name: "Administrator",
        time: 'about 2 hours ago',
        participants: [],
        total: 0,
        content: 'Some reply made to a conversation by the author'
    };

    render() {
        const { total, content } = this.props;
        const participants = this.props.participants.map((p, i) => <li key={i}></li>);
        const mentions = this.props.mentions.map((mention, i) => <li key={mention.oid} className="mention">{mention.name}</li>);
        return (
            <div className="conversation">
                <div className="conversation-collection">
                    <Reply>
                        <div>
                            <ul className="participants">{participants}</ul>
                        </div>
                    </Reply>
                    <div className="details">
                        <div className="details-content">{content}</div>
                        <div className="conversation-mentions">
                            <ul>
                                {mentions}
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
                            <div className="expand">
                                <i className="fa fa-exchange" />
                            </div>
                            <span className="total">
                                    {`${total} earlier replies`}
                                </span>
                        </div>
                        <ol>
                            <li className="reply">
                                <Reply />

                                <div className="details">
                                    <div className="details-content">{content}</div>
                                </div>
                            </li>
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
    static defaultProps = {
        expressions: [
            {
                url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
                name: "Administrator",
                time: 'about 2 hours ago',
                participants: [],
                mentions: [],
                total: 0
            },
            {
                url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
                name: "Andre",
                time: '1 hour ago',
                participants: [],
                mentions: [],
                total: 6
            },
            {
                url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
                name: "Administrator",
                time: '1 hour ago',
                participants: [],
                mentions: [{
                    oid: "Story:123",
                    name: "Done Story"
                },
                    {
                        oid: "Story:124",
                        name: "Walker's Story"
                    }],
                total: 2
            },
            {
                url: "http://localhost/VersionOne.Web/Image.mvc/Show?imageOid=Image%3A1072",
                name: "Andre",
                time: '50 minutes ago',
                participants: [],
                mentions: [{
                    oid: "Story:123",
                    name: "Done Story"
                },
                    {
                        oid: "Story:124",
                        name: "Walker's Story"
                    }],
                total: 4
            }
        ]
    };

    render() {
        const expressions = this.props.expressions.map((exp, i) => <Expression key={i} {...exp} />);

        return (
            <div className="conversation-stream">
                {expressions}
            </div>
        )
    }
}