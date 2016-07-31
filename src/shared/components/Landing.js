import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as WorkitemActions } from './../atoms/workitem';
import { Selectors as BacklogSelectors } from './../atoms/backlog';

export class LandingContainer extends React.Component {

    onClick(workitemOidToken) {
        this.props.selectWorkitem(workitemOidToken);
    }

    render() {
        const wis = this.props.workitems.map(wi => {
            return (
                <tr key={wi.number} id={wi.oid}
                    className={`${wi.isSelected ? 'selected' : ''}`}
                    onClick={this.onClick.bind(this, wi.oid)}>
                    <td></td>
                    <td className="number">{wi.number}</td>
                    <td className="name">{wi.name}</td>
                    <td></td>
                </tr>
            )
        });

        return (
            <div className="backlog-content-container">
                <div className="backlog-content">
                    <div className="gutter"></div>
                    <div className="left backlog">
                        <div className="pane">
                            <div className="header">
                                <div className="toolbar">
                                    <div className="btn btn-primary">Add</div>
                                </div>
                            </div>
                            <div className="content">
                                <table className="grid">
                                    <colgroup>
                                        <col className="spacer" />
                                        <col className="number" />
                                        <col className="name" />
                                        <col className="select-arrow" />
                                    </colgroup>
                                    <tbody>
                                    {wis}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="right workitem-details">
                        <div className="pane">
                            <div className="header">
                                <div className="toolbar">
                                    <div className="btn btn-primary">Add</div>
                                </div>
                                <div className="content">
                                    Update the workitem here...
                                </div>
                            </div>
                        </div>
                        <div className="pane-caret"></div>
                    </div>
                    <div className="gutter"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        workitems: BacklogSelectors.getAllPrimaryWorkitems(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectWorkitem: WorkitemActions.selectWorkitem
    }, dispatch);
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer);