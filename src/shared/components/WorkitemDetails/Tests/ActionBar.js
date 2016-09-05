import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../../Toolbar';

const isActive = (tab, current) => tab === current ? 'active' : '';

export class Actionbar extends React.Component {
    setBddTab = () => {
        this.props.setTab('currentTestsTab', 0);
    };

    setSimpleTab = () => {
        this.props.setTab('currentTestsTab', 1);
    };

    render() {
        const {currentTestsTab:tab} = this.props;
        return (
            <header className="tests-actionbar">
                <Toolbar>
                    <ToolbarTitle text={'Tests'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div className={isActive(tab, 0)} onClick={this.setBddTab}>
                            <span>BDD</span>
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 1)} onClick={this.setSimpleTab}>
                            <span>Simple</span>
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}