import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as WorkitemActions } from './../atoms/workitem';
import {
    ActionCreators as BacklogActions,
    Selectors as BacklogSelectors
} from './../atoms/backlog';
import { ChevronIcon } from './ChevronIcon';

export class LeftPaneContainer extends React.Component {

    selectWorkitem({ index, oid }) {
        this.props.getWorkitemDetails(index, oid);
    }

    hoverWorkitem(workitemOidToken) {
        this.props.hoverWorkitem(workitemOidToken);
    }

    render() {
        let i = 0;
        const wis = this.props.workitems.map(wi => {
            return (
                <tr key={wi.number} id={wi.oid}
                    className={`${wi.isSelected ? 'selected' : ''} ${wi.isHovered ? 'hovered' : ''}`}
                    onClick={this.selectWorkitem.bind(this, {index: i++, oid: wi.oid })}
                    onMouseEnter={this.hoverWorkitem.bind(this, wi.oid)}
                    onMouseLeave={this.hoverWorkitem.bind(this, '')}>
                    <td></td>
                    <td className="number">{wi.number}</td>
                    <td className="name">{wi.name}</td>
                    <td className="select-arrow"><ChevronIcon /></td>
                </tr>
            )
        });

        return (
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
        getWorkitemDetails: BacklogActions.getWorkitemDetails,
        hoverWorkitem: WorkitemActions.hoverWorkitem
    }, dispatch);
}

export const LeftPane = connect(mapStateToProps, mapDispatchToProps)(LeftPaneContainer);