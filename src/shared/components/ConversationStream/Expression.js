import React from 'react';
import { MemberAvatar } from './../Avatar';

export class Expression extends React.Component {
    render() {
        const { author, authorAt, content, mentions } = this.props;
        return (
            <li className="conversation expanded">
                <div className="header">
                    <div className="avatar">
                        <MemberAvatar />
                    </div>
                    <span className="name">
                        {author.name}
                    </span>
                    <span className="when">
                        <time dateTime={authorAt} title={authorAt}>{authorAt}</time>
                    </span>
                    <a className="remove-conversation" title="remove"></a>
                    <div>
                        <ul className="participants">
                            {}
                        </ul>
                    </div>
                </div>
                <div className="details">
                    <div className="conversation-content">{content}</div>
                    <div className="conversation-mentions">
                        <ul>
                            {}
                        </ul>
                    </div>
                    <div className="mentions">
                        <ul>
                            {mentions.map((m, i) => <Mention key={i} {...m} />)}
                        </ul>
                    </div>
                </div>
                <div className="replies">

                </div>
            </li>
        );
    }
}

export class Mention extends React.Component {
    render() {
        const { oid, name, isClosed } = this.props;
        return (
            <li className={`mention ${isClosed}`}>
                {name}
            </li>
        );
    }
}