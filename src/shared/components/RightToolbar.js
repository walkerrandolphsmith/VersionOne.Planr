import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './Toolbar';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './Icons';
import { OwnersPanel } from './OwnersPanel';

export class RightToolbar extends React.Component {

    getConversationStream() {
        this.props.getConversationStream(this.props.workitem.oid);
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
                        <div onClick={this.getConversationStream.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ActivityStreamIcon />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <CommitStreamIcon />
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}