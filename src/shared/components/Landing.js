import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class LandingContainer extends React.Component {
    render() {
        const wis = this.props.workitems.map(wi => {
            const children = wi.children.map(child => <div key={child}>---------->{child}</div>);
            return <div key={wi.number}>
                <span>{wi.number} - {wi.name}</span>
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
        workitems: state.workitemStateAtom.get('workitems')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer);