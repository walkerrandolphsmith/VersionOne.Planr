import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSpacer } from './../common/Toolbar';
import { DetailsIcon, ActivityStreamIcon, ConversationsIcon, LinkIcon } from './../common/Icons';
import { WorkitemTitle } from './WorkitemTitle';

const isActive = (tab, current) => tab === current ? 'active' : '';

export class Actionbar extends React.Component {

    static defaultProps = {
        tabType: 'currentDetailsTab'
    };

    getWorkitemDetails = () => {
        this.props.setTab(this.props.tabType, 0);
    };

    getConversationStream = () => {
        this.props.setTab(this.props.tabType, 1);
    };

    getActivityStream = () => {
        this.props.setTab(this.props.tabType, 2);
    };

    getLinks = () => {
        this.props.setTab(this.props.tabType, 3);
    };

    render() {
        const {
            oid,
            number,
            name,
            assetType,
            currentDetailsTab:tab,
            updateWorkitem
        } = this.props;

        return (
            <header className={assetType}>
                <Toolbar>
                    <WorkitemTitle name={name} number={number} oid={oid} updateWorkitem={updateWorkitem} />
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div className={isActive(tab, 0)} onClick={this.getWorkitemDetails}>
                            <DetailsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 1)} onClick={this.getConversationStream}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 2)} onClick={this.getActivityStream}>
                            <ActivityStreamIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className={isActive(tab, 3)} onClick={this.getLinks}>
                            <LinkIcon />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}