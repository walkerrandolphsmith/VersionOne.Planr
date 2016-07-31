import React from 'react';
import { LeftPane } from './LeftPane';
import { RightPane } from './RightPane';

export class Landing extends React.Component {
    render() {
        return (
            <div className="backlog-content-container">
                <div className="backlog-content">
                    <div className="gutter"></div>
                    <LeftPane {...this.props} />
                    <RightPane {...this.props} />
                    <div className="gutter"></div>
                </div>
            </div>
        )
    }
}