import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as BacklogActions } from './../../atoms/backlog';
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

function mapStateToProps(state) {
    return {
        tab: state.backlogStateAtom.get('tab'),
        caretTopPosition: state.backlogStateAtom.get('caretTopPosition'),
        workitem: state.workitemStateAtom.get('workitems').get(state.workitemStateAtom.get('selected'))
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setTab: BacklogActions.setTab,
        getConversationStream: BacklogActions.getConversationStream,
        getActivityStream: BacklogActions.getActivityStream
    }, dispatch);
}

export const WorkitemPanel = connect(mapStateToProps, mapDispatchToProps)(WorkitemPanelContainer);