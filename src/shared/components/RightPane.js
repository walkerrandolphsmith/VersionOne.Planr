import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { WorkitemDetails } from './WorkitemDetails';
import { RightToolbar } from './RightToolbar';
import { ActionCreators as BacklogActions } from './../atoms/backlog';

export class RightPaneContainer extends React.Component {

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
        const { assetType } = this.props.workitem;
        const top = this.state.initialOffset + (this.props.caretTopPosition * this.state.rowHeight);

        let bkColor = 'white';

        switch(assetType[0]) {
            case 'Story': bkColor = '#7FB235'; break;
            case 'Defect': bkColor = '#9F201F'; break;
            case 'TestSet': bkColor = 'blue'; break;
            default: bkColor = 'white';
        }

        const headerStyles = {
            backgroundColor: bkColor
        };


        return (
            <div className="right workitem-details">
                <div className="pane">
                    <div className="header" style={headerStyles}>
                        <RightToolbar {...this.props} />
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
        getConversationStream: BacklogActions.getConversationStream
    }, dispatch);
}

export const RightPane = connect(mapStateToProps, mapDispatchToProps)(RightPaneContainer);