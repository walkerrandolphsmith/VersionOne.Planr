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
            const children = wi.children.map(child => <div key={child}>---------->{child}</div>);
            return <div key={wi.number} onClick={this.onClick.bind(this, wi.oid)}>
                <span>{wi.isSelected ? "Y" : "N"} - {wi.oid} - {wi.number} - {wi.name}</span>
                <div>{children}</div>
            </div>
        });

        return (
            <div>
                {wis}
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