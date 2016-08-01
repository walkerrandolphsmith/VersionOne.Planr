import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './Toolbar';
import { MemberAvatar } from './Avatar';

export class RightToolbar extends React.Component {
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
                        <MemberAvatar />
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}