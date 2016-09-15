import React from 'react';
import { DeleteIcon } from './../common/Icons';
import { MemberAvatar } from './../common/Avatar';

export class StreamHeader extends React.Component {
    render() {
        const { currentUser:url } = this.props;
        return (
            <div className="conversation-stream-header">
                <div>
                    <div className="conversations-start-new">
                        <div className="conversation new-conversation placeholder">
                            <div className="avatar">
                                <MemberAvatar url={url} />
                            </div>
                            <input type="text" placeholder="Start a Conversation..." />
                        </div>
                    </div>
                </div>
                <div className="find-container">
                    <div className="wrapper">
                        <div className="conversation-find">
                            <span className="icon-container">
                                <span className="icon find"><DeleteIcon /></span>
                            </span>
                            <span className="icon find">Find in stream...</span>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="conversations-find-clear">
                            <span className="icon clear">
                                <DeleteIcon />
                            </span>
                        </div>
                    </div>
                    <div className="wrapper findwrapper">
                        <input type="text" placeholder="Find..." className="find-input find-loading" />
                    </div>
                </div>
            </div>
        )
    }
}