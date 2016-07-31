import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class LandingContainer extends React.Component {
    render() {
        const wis = this.props.workitems.map(wi => {
            const tasks = wi.get('Tasks').map(task => <div key={task}>---------->{task}</div>);
            const tests = wi.get('Tests').map(test => <div key={test}>---------->{test}</div>);
            return <div key={wi.get('Number')}>
                <span>{wi.get('Number')} - {wi.get('Name')}</span>
                <div>{tasks}</div>
                <div>{tests}</div>
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