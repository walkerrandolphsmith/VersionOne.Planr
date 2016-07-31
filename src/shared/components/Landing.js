import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as WorkitemActions } from './../atoms/workitem';

export class LandingContainer extends React.Component {

    onClick(workitemOidToken) {
        this.props.selectWorkitem(workitemOidToken);
    }

    render() {
        const wis = this.props.workitems.map(wi => {
            const children = wi.children.map(child => <div key={child}>---------->{child}</div>);
            return <div key={wi.number} onClick={this.onClick.bind(this, wi.oid)}>
                <span>{wi.oid} - {wi.number} - {wi.name}</span>
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
    console.log(state.workitemStateAtom.get('selected'));
    return {
        workitems: state.workitemStateAtom.get('workitems')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectWorkitem: WorkitemActions.selectWorkitem
    }, dispatch);
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer);