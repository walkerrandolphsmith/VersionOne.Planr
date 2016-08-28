import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../Toolbar';
import { Button } from './../Button';

export class Actionbar extends React.Component {
    render() {
        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={'Backlog'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <Button text="Add" />
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}