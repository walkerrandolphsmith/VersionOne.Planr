import React from 'react';
import { Estimate } from './Estimate';
import { Description } from './Description';
import { OwnersList } from './../OwnersList';
import { TestSection } from './Tests';

export class Footer extends React.Component {

    static defaultProps = {
        defaultValue: '-'
    };

    render() {
        const { defaultValue:val } = this.props;
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
                                {status.name || val}
                            </div>
                        </div>
                        <div className="attribute">
                            <label>Iteration:</label>
                            <div className="value-container">
                                {iteration.name || val}
                            </div>
                        </div>
                    </div>
                    <div className="attributes">
                        <div className="attribute">
                            <label>Priority:</label>
                            <div className="value-container">
                                {priority.name || val}
                            </div>
                        </div>
                        <div className="attribute">
                            <label>Class of Service:</label>
                            <div className="value-container">
                                {classOfService.name || val}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}