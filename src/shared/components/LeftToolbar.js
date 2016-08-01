import React from 'react';
import { Toolbar, ToolbarTitle } from './Toolbar';

export class LeftToolbar extends React.Component {
    render() {
        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={'Backlog'}/>
                </Toolbar>
            </header>
        );
    }
}