import React from 'react';
import { Estimate } from './Estimate';
import { Description } from './Description';
import { ProgressBar } from './../ProgressBar';
import { OwnersList } from './../OwnersList';
import { TestSection } from './Tests';

export class WorkitemDetails extends React.Component {

    constructor(props, context) {
        super(props, context);
        const wi = props.workitem || {};
        this.state = wi;
    }

    componentWillReceiveProps(nextProps) {
        const wi = nextProps.workitem;
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
                <div className="progress-section">
                    <ProgressBar actual={90} showGoal={false} goal={10} label="Task Summary"/>
                </div>
                <div className="progress-section">
                    <ProgressBar actual={30} showGoal={true} goal={10} label="Test Summary"/>
                </div>
                <OwnersList owners={owners} />
                <Estimate estimate={estimate} />
                <div className="group">
                    {/*
                     Project, Iteration
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Project:</label>
                            <div className="value-container">
                                {scope.name}
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
                     Team, Backlog Group
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Team:</label>
                            <div className="value-container">
                                {team.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Backlog Group:</label>
                            <div className="value-container">
                                Group
                            </div>
                        </div>
                    </div>

                    {/*
                     Epic, Status
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Epic:</label>
                            <div className="value-container">
                                {epic.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Status:</label>
                            <div className="value-container">
                                {status.name}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
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

                    {/*
                     Created by, Created Date, Customer
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Created By:</label>
                            <div className="value-container">
                                {createdBy.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Created Date:</label>
                            <div className="value-container">
                                {formattedCreateDate}
                            </div>
                        </div>
                    </div>

                    {/*
                     Changed By, Change Date, Date Completed
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Changed By:</label>
                            <div className="value-container">
                                {changedBy.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Change Date:</label>
                            <div className="value-container">
                                {formattedChangeDate}
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