import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './Toolbar';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './Icons';
import { OwnersPanel } from './OwnersPanel';

export class RightToolbar extends React.Component {
    render() {
        const {
           workitem
        } = this.props;

        console.log(workitem.owners);
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
                        <ConversationsIcon />
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