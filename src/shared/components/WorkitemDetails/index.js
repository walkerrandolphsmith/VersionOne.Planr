import React from 'react';
import { Estimate } from './Estimate';
import { Description } from './Description';
import { ProgressBar } from './../ProgressBar';
import { OwnersList } from './../OwnersList';
import { TestSection } from './Tests';

export class WorkitemDetails extends React.Component {

    componentWillMount() {
        if (this.props.workitem.oid) {
            this.props.getWorkitemDetails(this.props.workitem.oid);
        }
    }

    componentWillReceiveProps(nextProps) {
        const wi = nextProps.workitem;
        if(this.props.workitem.oid !== nextProps.workitem.oid) {
            this.props.getWorkitemDetails(nextProps.workitem.oid);
        }
    }

    render() {
        const {
            oid,
            description,
            scope,
            epic,
            iteration,
            team,
            formattedChangeDate,
            changedBy,
            formattedCreateDate,
            createdBy,
            priority,
            classOfService,
            estimate,
            status,
            owners,
            blockingIssues,
            children,
            tests
        } = this.props.workitem;

        return (
            <div>
                <OwnersList owners={owners} />
                <Estimate {...this.props} />
                <div className="group">
                    {/*
                     Project, Iteration
                     */}
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

                    {/*
                     Priority, Class of Service
                     */}
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

                <Description oid={oid} description={description} {...this.props} />
                <TestSection tests={tests} {...this.props} />

            </div>
        )
    }
}