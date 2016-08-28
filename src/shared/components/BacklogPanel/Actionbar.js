import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../Toolbar';
import { MultiButton } from './../Buttons';

export class Actionbar extends React.Component {
    render() {
        const { addWorkitem } = this.props;
        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={'Backlog'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <MultiButton text="Add" onClick={addWorkitem}/>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}