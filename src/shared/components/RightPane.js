import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { WorkitemDetails } from './WorkitemDetails';

export class RightPaneContainer extends React.Component {
    render() {
        const headerHeight = 63;
        const rowHeight = 35;
        const top = (headerHeight + rowHeight/2) + (this.props.caretTopPosition * rowHeight);
        return (
            <div className="right workitem-details">
                <div className="pane">
                    <div className="header">
                        <div className="toolbar">
                            <div className="btn btn-primary">Add</div>
                        </div>
                    </div>
                    <div className="content">
                        <WorkitemDetails {...this.props} />
                    </div>
                </div>
                <div className="pane-caret" style={{top: top}}></div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        caretTopPosition: state.backlogStateAtom.get('caretTopPosition'),
        workitem: state.workitemStateAtom.get('workitems').get(state.workitemStateAtom.get('selected'))
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export const RightPane = connect(mapStateToProps, mapDispatchToProps)(RightPaneContainer);