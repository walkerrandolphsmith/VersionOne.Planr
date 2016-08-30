import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Selectors } from './../../state';
import { Activity } from './Activity';
import { ActionCreators } from './../../state';

export class _ActivityStream extends React.Component {
    static defaultProps = {
        workitem: {
            activityGroupedByDate: {}
        }
    };

    componentWillMount() {
        this.props.getActivityStream(this.props.workitem.oid);
    }

    render() {
        const groups = this.props.activityGroupedByDate;
        let activity = [];
        for(var group in groups) {
            activity.push(
                <div key={group}>
                    <div className="day">
                        <div className="day-name">{group}</div>
                        <span className="date">{group}</span>
                    </div>
                    <div>
                        {groups[group].map((a, i) => <Activity key={i} {...a} />)}
                    </div>
                </div>
            )
        };
        return (
            <div className="activity-stream">
                {activity}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activityGroupedByDate: Selectors.getActivityStreamGroupedByDate(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const ActivityStream = connect(mapStateToProps, mapDispatchToProps)(_ActivityStream);