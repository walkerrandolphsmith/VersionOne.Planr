import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../../Toolbar';
import { ConversationsIcon } from './../../Icons';

export class Actionbar extends React.Component {
    setBddTab() {
        this.props.setTab('currentTestsTab', 0);
    };

    setSimpleTab() {
        this.props.setTab('currentTestsTab', 1);
    }

    render() {
        return (
            <header id="tests-actionbar">
                <Toolbar>
                    <ToolbarTitle text={'Tests'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div onClick={this.setBddTab.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.setSimpleTab.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}