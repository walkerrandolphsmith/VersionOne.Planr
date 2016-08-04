import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Workitem } from './../Workitem';
import { Actionbar } from './Actionbar';
import { ActionCreators as BacklogActions } from './../../atoms/backlog';

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

    render() {
        const top = this.state.initialOffset + (this.props.caretTopPosition * this.state.rowHeight);

        return (
            <div className="right workitem-details">
                <div className="pane">
                    <Actionbar {...this.props} />
                    <div className="content">
                        <Workitem {...this.props} />
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