import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { WorkitemDetails } from './WorkitemDetails';

export class RightPaneContainer extends React.Component {
    render() {
        const { number, name, assetType } = this.props.workitem;
        const headerHeight = 63;
        const rowHeight = 35;
        const top = (headerHeight + rowHeight/2) + (this.props.caretTopPosition * rowHeight);

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
                        <div className="toolbar">
                            <div className="btn btn-primary">Add</div>
                            <span>{number} {name}</span>
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