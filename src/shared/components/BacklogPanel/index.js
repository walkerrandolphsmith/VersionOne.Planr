import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../../state';
import { Actionbar } from './Actionbar';
import { ChevronIcon, StoryIcon, DefectIcon } from './../Icons';

export class BacklogPanelContainer extends React.Component {
    componentWillMount() {
        if (this.props.workitems.length > 0) {
            const oid = this.props.workitems[Object.keys(this.props.workitems)[0]].oid;
            this.props.selectWorkitem(oid);
        }
    }

    selectWorkitem({ index, oid }) {
        this.props.selectWorkitem(oid);
    }

    render() {
        const wis = this.props.workitems.map((wi, i) => {
            const icon = wi.assetType === 'Story' ? <StoryIcon /> : <DefectIcon />;
            return (
                <tr key={wi.number} id={wi.oid}
                    className={`${wi.isSelected ? 'selected' : ''}`}
                    onClick={this.selectWorkitem.bind(this, {index: i, oid: wi.oid })}>
                    <td className="spacer" />
                    <td className="icon">{icon}</td>
                    <td className="number">{wi.number}</td>
                    <td className="name">
                        <div>{wi.name}</div>
                    </td>
                    <td className="select-arrow"><ChevronIcon /></td>
                </tr>
            )
        });

        return (
            <div className="left backlog">
                <div className="pane">
                    <div className="header">
                        <Actionbar {...this.props} />
                    </div>
                    <div className="content">
                        <table className="grid">
                            <colgroup>
                                <col className="spacer" />
                                <col className="icon" />
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
        workitems: Selectors.getAllPrimaryWorkitems(state),
        epic: state.atom.epic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const BacklogPanel = connect(mapStateToProps, mapDispatchToProps)(BacklogPanelContainer);