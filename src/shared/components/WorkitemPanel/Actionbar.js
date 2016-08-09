import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './../Toolbar';
import { ActivityStreamIcon, CommitStreamIcon, ConversationsIcon } from './../Icons';

export class Actionbar extends React.Component {

    getWorkitemDetails() {
        this.props.setTab(0);
    }

    getConversationStream() {
        this.props.getConversationStream(this.props.workitem.oid);
        this.props.setTab(1);
    }

    getActivityStream() {
        this.props.getActivityStream(this.props.workitem.oid);
        this.props.setTab(2);
    }

    getCommitStream() {
        this.props.setTab(3);
    }

    render() {
        const {
           workitem
        } = this.props;


        let bkColor = 'white';

        switch(workitem.assetType[0]) {
            case 'Story': bkColor = '#7FB235'; break;
            case 'Defect': bkColor = '#9F201F'; break;
            case 'TestSet': bkColor = 'blue'; break;
            default: bkColor = 'white';
        }

        return (
            <header style={{ backgroundColor: bkColor }}>
                <Toolbar>
                    <ToolbarTitle text={`${workitem.number} ${workitem.name}`}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div onClick={this.getWorkitemDetails.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getConversationStream.bind(this)}>
                            <ConversationsIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getActivityStream.bind(this)}>
                            <ActivityStreamIcon />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div onClick={this.getCommitStream.bind(this)}>
                            <CommitStreamIcon />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}