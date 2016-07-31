import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class WorkitemDetailsContainer extends React.Component {

    render() {
        const {
            oid,
            assetType,
            number,
            name,
            scope,
            changeDate,
            classOfService,
            estimate,
            status,
            blockingIssues,
            owners,
            children,
            isSelected,
            isHovered,
        } = this.props.workitem;

        return (
            <div>
                <div>{oid}</div>
                <div>{name}</div>
                <div>{number}</div>
                <div>{changeDate}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        workitem: state.workitemStateAtom.get('workitems').get(state.workitemStateAtom.get('selected')) || {}
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export const WorkitemDetails = connect(mapStateToProps, mapDispatchToProps)(WorkitemDetailsContainer);