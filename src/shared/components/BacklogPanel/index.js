import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../../state';
import { Actionbar } from './Actionbar';
import { ChevronIcon, StoryIcon, DefectIcon } from './../Icons';

export class BacklogPanelContainer extends React.Component {

    selectWorkitem({ index, oid }) {
        this.props.getWorkitemDetails(index, oid);
    }

    hoverWorkitem(workitemOidToken) {
        this.props.hoverWorkitem(workitemOidToken);
    }

    componentWillMount() {
        const oid = this.props.workitems[Object.keys(this.props.workitems)[0]].oid;
        this.props.getWorkitemDetails(0, oid);
    }

    render() {
        let i = 0;
        const wis = this.props.workitems.map(wi => {
            const icon = wi.assetType[0] === 'Story' ? <StoryIcon /> : <DefectIcon />;
            return (
                <tr key={wi.number} id={wi.oid}
                    className={`${wi.isSelected ? 'selected' : ''} ${wi.isHovered ? 'hovered' : ''}`}
                    onClick={this.selectWorkitem.bind(this, {index: i++, oid: wi.oid })}
                    onMouseEnter={this.hoverWorkitem.bind(this, wi.oid)}
                    onMouseLeave={this.hoverWorkitem.bind(this, '')}>
                    <td></td>
                    <td className="icon">{icon}</td>
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
        workitems: Selectors.getAllPrimaryWorkitems(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWorkitemDetails: ActionCreators.getWorkitemDetails,
        hoverWorkitem: ActionCreators.hoverWorkitem,
        addWorkitem: ActionCreators.addWorkitem
    }, dispatch);
}

export const BacklogPanel = connect(mapStateToProps, mapDispatchToProps)(BacklogPanelContainer);