import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../../state';
import { Actionbar } from './Actionbar';
import { WorkitemDetails } from './../WorkitemDetails';
import { ConversationStream } from './../ConversationStream';
import { ActivityStream } from './../ActivityStream';
import { Links } from './../Links';

export class WorkitemPanelContainer extends React.Component {

    static defaultProps = {
        oid: '',
        assetType: '',
        number: '',
        name: '',
        description: '',
        estimate: '-',
        scope: {},
        epic: {},
        status: { oid: 'NULL', name: '-' },
        statuses: [],
        children: [],
        activity: [],
        conversations: [],
        tests: [],
        links: []
    };

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
            3: <Links {...this.props} />
        };

        return ComponentMap[this.props['currentDetailsTab']] || <WorkitemDetails {...this.props} />;
    };

    render() {
        const top = this.state.initialOffset + (this.props.caretTopPosition * this.state.rowHeight);
        const hideIfEmpty = this.props.oid == "" ? 'hidden' : '';

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

function mapStateToProps(state) {
    const selectedWorkitem = state.backlogStateAtom.workitems[state.backlogStateAtom.selected];
    return {
        v1Host: state.backlogStateAtom.v1Host,
        v1Protocol: state.backlogStateAtom.v1Protocol,
        currentTestsTab: state.backlogStateAtom.currentTestsTab,
        currentDetailsTab: state.backlogStateAtom.currentDetailsTab,
        caretTopPosition: state.backlogStateAtom.caretTopPosition,
        workitems: Selectors.getAllPrimaryWorkitems(state),
        ...selectedWorkitem
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const WorkitemPanel = connect(mapStateToProps, mapDispatchToProps)(WorkitemPanelContainer);