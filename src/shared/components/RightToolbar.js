import React from 'react';
import { Toolbar, ToolbarTitle } from './Toolbar';

export class RightToolbar extends React.Component {
    render() {
        const {
           workitem
        } = this.props;

        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={`${workitem.number} ${workitem.name}`}/>
                </Toolbar>
            </header>
        );
    }
}