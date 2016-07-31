import React from 'react';
import { WorkitemDetails } from './WorkitemDetails';

export class RightPane extends React.Component {
    render() {
        return (
            <div className="right workitem-details">
                <div className="pane">
                    <div className="header">
                        <div className="toolbar">
                            <div className="btn btn-primary">Add</div>
                        </div>
                    </div>
                    <div className="content">
                        <WorkitemDetails />
                    </div>
                </div>
                <div className="pane-caret"></div>
            </div>
        )
    }
}