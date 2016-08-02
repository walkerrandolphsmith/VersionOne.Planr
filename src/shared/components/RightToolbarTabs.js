import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSpacer } from './Toolbar';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './Icons';

export class RightToolbarTabs extends React.Component {
    render() {
        const {
           workitem
        } = this.props;

        return (
            <header className="tabs">
                <Toolbar>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                            <ConversationsIcon />
                    </ToolbarGroup>
                    <ToolbarGroup>
                            <ActivityStreamIcon />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <CommitStreamIcon />
                    </ToolbarGroup>
                    <ToolbarSpacer />
                </Toolbar>
            </header>
        );
    }
}