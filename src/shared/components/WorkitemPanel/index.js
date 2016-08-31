import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../../state';
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
        const ComponentMap = {
            0: <WorkitemDetails {...this.props} />,
            1: <ConversationStream {...this.props} />,
            2: <ActivityStream {...this.props} />,
            3: <CommitStream {...this.props} />
        };

        return ComponentMap[this.props['currentDetailsTab']] || <WorkitemDetails {...this.props} />;
    };

    render() {
        const top = this.state.initialOffset + (this.props.caretTopPosition * this.state.rowHeight);
        const hideIfEmpty = this.props.workitem.oid == "" ? 'hidden' : '';

        return (
            <div className={`right workitem-details ${hideIfEmpty}`} >
                <div className="pane">
                    <Actionbar {...this.props} />
                    {this.getViewForTab()}
                </div>
                <div className="pane-caret" style={{top: top}}></div>
            </div>
        )
    }
}

const firstOrDefault = (wi) => {
    wi = wi || {};
    return {
        oid: wi.oid || '',
        assetType: wi.assetType || '',
        number: wi.number || '',
        name: wi.name || '',
        description: wi.description || '',
        estimate: wi.estimate || '',
        formattedChangeDate: wi.formattedChangeDate || '',
        formattedCreateDate: wi.formattedCreateDate || '',
        scope: wi.scope || {},
        iteration: wi.iteration || {},
        team: wi.team || {},
        epic: wi.epic || {},
        changedBy: wi.changedBy || {},
        createdBy: wi.createdBy || {},
        priority: wi.priority || {},
        classOfService: wi.classOfService || {},
        status: wi.status || {
            oid: 'NULL',
            name: '-'
        },
        blockingIssues: wi.blockingIssues || [],
        owners: wi.owners || [],
        children: wi.children || [],
        activity: wi.activity || [],
        conversations: wi.conversations || [],
        tests: wi.tests || []
    };
};

function mapStateToProps(state) {
    return {
        currentTestsTab: state.backlogStateAtom.currentTestsTab,
        currentDetailsTab: state.backlogStateAtom.currentDetailsTab,
        caretTopPosition: state.backlogStateAtom.caretTopPosition,
        workitem: firstOrDefault(state.backlogStateAtom.workitems[state.backlogStateAtom.selected]),
        workitems: Selectors.getAllPrimaryWorkitems(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const WorkitemPanel = connect(mapStateToProps, mapDispatchToProps)(WorkitemPanelContainer);