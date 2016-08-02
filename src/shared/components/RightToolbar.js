import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './Toolbar';
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
                </Toolbar>
            </header>
        );
    }
}