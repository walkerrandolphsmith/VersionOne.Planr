import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Actionbar } from './Actionbar';
import { WorkitemDetails } from './../WorkitemDetails';
import { ConversationStream } from './../ConversationStream';
import { ActivityStream } from './../ActivityStream';
import { CommitStream } from './../CommitStream';

export class WorkitemPanelContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        const toolbarHeight = 56;
        const rowHeight = 35;
        const initialOffset = (toolbarHeight + rowHeight/2);
        this.state = {
            toolbarHeight: toolbarHeight,
            rowHeight: rowHeight,
            initialOffset: initialOffset
        }
    }

    getViewForTab = () => {
        let tabView = <div></div>;
        switch(this.props.tab) {
            case 0: tabView = <WorkitemDetails {...this.props} />; break;
            case 1: tabView = <ConversationStream {...this.props} />; break;
            case 2: tabView = <ActivityStream {...this.props} />; break;
            case 3: tabView = <CommitStream {...this.props} />; break;
        }
        return tabView;
    };

    render() {
        const top = this.state.initialOffset + (this.props.caretTopPosition * this.state.rowHeight);
        const tabView = this.getViewForTab();

        return (
            <div className="right workitem-details">
                <div className="pane">
                    <Actionbar {...this.props} />
                    <div className="content">
                        {tabView}
                    </div>
                </div>
                <div className="pane-caret" style={{top: top}}></div>
            </div>
        )
    }
}

const firstOrDefault = (wi) => ({
    oid: wi.oid || '',
    assetType: wi.assetType || '',
    number: wi.number || '',
    name: wi.name || '',
    description: wi.description || '',
    estimate: wi.estimate || '',
    changeDate: wi.changeDate || '',
    createDate: wi.createDate || '',
    scope: wi.scope || {},
    iteration: wi.iteration || {},
    team: wi.team || {},
    epic: wi.epic || {},
    changedBy: wi.changedBy || {},
    createdBy: wi.createdBy || {},
    priority: wi.priority || {},
    classOfService: wi.classOfService || {},
    status: wi.status || {},
    blockingIssues: wi.blockingIssues || [],
    owners: wi.owners || [],
    children: wi.children || [],
    activity: wi.activity || [],
    conversations: wi.conversations || [],
    tests: wi.tests || []
});

function mapStateToProps(state) {
    return {
        tab: state.backlogStateAtom.tab,
        caretTopPosition: state.backlogStateAtom.caretTopPosition,
        workitem: firstOrDefault(state.backlogStateAtom.workitems[state.backlogStateAtom.selected])
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const WorkitemPanel = connect(mapStateToProps, mapDispatchToProps)(WorkitemPanelContainer);