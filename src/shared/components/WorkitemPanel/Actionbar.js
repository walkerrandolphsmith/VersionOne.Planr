import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSpacer } from './../Toolbar';
import { WorkitemTitle } from './WorkitemTitle';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './../Icons';

const isActive = (tab, current) => tab === current ? 'active' : '';

export class Actionbar extends React.Component {

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
        const { workitem, tab, updateWorkitem } = this.props;

        return (
            <header className={workitem.assetType}>
                <Toolbar>
                    <WorkitemTitle name={workitem.name} number={workitem.number} oid={workitem.oid} updateWorkitem={updateWorkitem} />
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div className={isActive(tab, 0)} onClick={this.getWorkitemDetails.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 1)} onClick={this.getConversationStream.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 2)} onClick={this.getActivityStream.bind(this)}>
                            <ActivityStreamIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 3)} onClick={this.getCommitStream.bind(this)}>
                            <CommitStreamIcon />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}