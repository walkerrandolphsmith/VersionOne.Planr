import React from 'react';
import { Activity } from './Activity';

export class ActivityStream extends React.Component {
    static defaultProps = {
        workitem: {
            activity: []
        }
    };

    render() {
        return (
            <div className="activity-stream">
                {this.props.workitem.activity.map((a, i) => <Activity key={i} {...a} />)}
            </div>
        )
    }
}