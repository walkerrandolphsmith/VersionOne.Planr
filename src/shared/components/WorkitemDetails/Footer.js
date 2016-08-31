import React from 'react';
import { Estimate } from './Estimate';
import { Description } from './Description';
import { OwnersList } from './../OwnersList';
import { TestSection } from './Tests';

export class Footer extends React.Component {

    render() {
        const {
            iteration,
            priority,
            classOfService,
            status,
            owners
        } = this.props.workitem;

        return (
            <div className="footer">
                <div className="group">
                    <OwnersList owners={owners} />
                    <Estimate label="Pts." {...this.props} />
                </div>
                <div className="group">
                    <div className="attributes">
                        <div className="attribute">
                            <label>Status:</label>
                            <div className="value-container">
                                {status.name}
                            </div>
                        </div>
                        <div className="attribute">
                            <label>Iteration:</label>
                            <div className="value-container">
                                {iteration.name}
                            </div>
                        </div>
                    </div>
                    <div className="attributes">
                        <div className="attribute">
                            <label>Priority:</label>
                            <div className="value-container">
                                {priority.name}
                            </div>
                        </div>
                        <div className="attribute">
                            <label>Class of Service:</label>
                            <div className="value-container">
                                {classOfService.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}