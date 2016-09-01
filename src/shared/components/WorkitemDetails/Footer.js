import React from 'react';
import { Estimate } from './Estimate';
import { Status } from './Status';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="group">
                    <Status {...this.props} />
                    <Estimate label="Pts." {...this.props} />
                </div>
            </div>
        )
    }
}