import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup, ToolbarSeparator } from './../../Toolbar';

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
                            <span>BDD</span>
                        </div>
                    </ToolbarGroup>
                    <ToolbarSeparator />
                    <ToolbarGroup>
                        <div onClick={this.setSimpleTab.bind(this)}>
                            <span>Simple</span>
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}