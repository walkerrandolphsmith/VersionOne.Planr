import React from 'react';
import { BacklogPanel } from './BacklogPanel';
import { WorkitemPanel } from './WorkitemPanel';

export class Landing extends React.Component {
    render() {
        return (
            <div className="backlog-content-container">
                <div className="backlog-content">
                    <div className="gutter"></div>
                    <BacklogPanel {...this.props} />
                    <WorkitemPanel {...this.props} />
                    <div className="gutter"></div>
                </div>
            </div>
        )
    }
}