import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './Toolbar';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './Icons';
import { OwnersPanel } from './OwnersPanel';

export class RightToolbar extends React.Component {

    getWorkitemDetails() {
        this.props.setTab(0);
    }

    getConversationStream() {
        this.props.getConversationStream(this.props.workitem.oid);
        this.props.setTab(1);
    }

    getActivityStream() {
        this.props.getActivityStream(this.props.workitem.oid);
        this.props.setTab(2);
    }

    getCommitStream() {
        this.props.setTab(3);
    }

    render() {
        const {
           workitem
        } = this.props;

        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={`${workitem.number} ${workitem.name}`}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <OwnersPanel owners={workitem.owners} />
                    </ToolbarGroup>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div onClick={this.getWorkitemDetails.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getConversationStream.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getActivityStream.bind(this)}>
                            <ActivityStreamIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getCommitStream.bind(this)}>
                            <CommitStreamIcon />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}