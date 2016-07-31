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
                    <td className="select-arrow">
                        <svg x="0px" y="0px" viewBox="-790 635.9 6 10">
                            <g transform="matrix(1,0,0,1.0297627,0,-18.962544)">
                                <path stroke="none" d="m -789.20056,645.28951 c -0.29219,-0.29219 -0.28836,-0.78835 0.011,-1.08895 L -786.4,641.4 c 0.1996,-0.20039 0.3,-0.4 0.3,-0.6 0,-0.2 -0.15633,-0.43149 -0.32153,-0.61105 L -789.2,637.4 c -0.24476,-0.23371 -0.3,-0.8 0,-1.1 0.3,-0.3 0.8,-0.3 1.1,0 l 2.9,2.9 c 0.5,0.4 0.7,1 0.7,1.7 0,0.7 -0.3,1.1 -0.7,1.6 l -2.86685,2.78951 c -0.33515,0.33515 -0.8423,0.29141 -1.13371,0 z"></path>
                            </g>
                        </svg>
                    </td>
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