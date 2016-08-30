import React from 'react';
import { Estimate } from './Estimate';
import { Description } from './Description';
import { ProgressBar } from './../ProgressBar';
import { OwnersList } from './../OwnersList';
import { TestSection } from './Tests';

export class WorkitemDetails extends React.Component {

    constructor(props, context) {
        super(props, context);
        const wi = props.workitem;
        this.state = wi;
    }

    componentWillMount() {
        if (this.state.oid) {
            this.props.getWorkitemDetails(this.state.oid);
        }
    }

    componentWillReceiveProps(nextProps) {
        const wi = nextProps.workitem;
        if(this.state.oid !== nextProps.workitem.oid) {
            this.props.getWorkitemDetails(nextProps.workitem.oid);
        }
        this.setState(wi);
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
        } = this.state;

        return (
            <div>
                <OwnersList owners={owners} />
                <Estimate estimate={estimate} />
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