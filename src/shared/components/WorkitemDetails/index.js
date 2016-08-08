import React from 'react';
import { Estimate } from './Estimate';
import { ProgressBar } from './../ProgressBar';

export class WorkitemDetails extends React.Component {

    static defaultProps = {
        workitem: {
            oid: '',
            assetType: '',
            number: '',
            name: '',
            description: '',
            scope: '',
            iteration: '',
            team: '',
            epic: '',
            changeDate: '',
            changedBy: '',
            createDate: '',
            createdBy: '',
            priority: '',
            classOfService: '',
            estimate: '',
            status: '',
            blockingIssues: [],
            owners: [],
            children: []
        }
    };


    constructor(props, context) {
        super(props, context);
        const wi = props.workitem;
        this.state = {
            oid: wi.oid,
            assetType: wi.assetType,
            number: wi.number,
            name: wi.name,
            description: wi.description,
            scope: wi.scope,
            iteration: wi.iteration,
            team: wi.team,
            epic: wi.epic,
            changeDate: wi.changeDate,
            changedBy: wi.changedBy,
            createDate: wi.createDate,
            createdBy: wi.createDate,
            priority: wi.priority,
            classOfService: wi.classOfService,
            estimate: wi.estimate,
            status: wi.status,
            blockingIssues: wi.blockingIssues,
            owners: wi.owners,
            children: wi.children
        }
    }

    componentWillReceiveProps(nextProps) {
        const wi = nextProps.workitem;
        this.setState({
            oid: wi.oid,
            assetType: wi.assetType,
            number: wi.number,
            name: wi.name,
            description: wi.description,
            scope: wi.scope,
            iteration: wi.iteration,
            team: wi.team,
            epic: wi.epic,
            changeDate: wi.changeDate,
            changedBy: wi.changedBy,
            createDate: wi.createDate,
            createdBy: wi.createDate,
            priority: wi.priority,
            classOfService: wi.classOfService,
            estimate: wi.estimate,
            status: wi.status,
            blockingIssues: wi.blockingIssues,
            owners: wi.owners,
            children: wi.children
        });
    }

    updateName(event) {
        const newName = event.target.value;
        this.setState({ name: newName });
        //this.props.updateWorkitem('name', newName);
    }

    render() {
        const {
            description,
            scope,
            epic,
            iteration,
            team,
            changeDate,
            changedBy,
            createDate,
            createdBy,
            priority,
            classOfService,
            estimate,
            status,
            blockingIssues,
            children
        } = this.state;

        const blockingIssuesList = blockingIssues.map(blockingIssue => <div key={blockingIssue.oid}>{blockingIssue.name}</div>);
        const testsAndTasksList = children.map(child => <div key={child}>{child}</div>);

        return (
            <div>
                <div className="progress-section">
                    <ProgressBar actual={90} showGoal={true} goal={10} label="task and test"/>
                </div>
                <div className="progress-section">
                    <ProgressBar actual={30} showGoal={false} goal={10} label="other"/>
                </div>
                <Estimate estimate={estimate} />
                <div className="group">
                    {/*
                        Project, Iteration, Team
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

                        <div className="attribute">
                            <label>Team:</label>
                            <div className="value-container">
                                {team.name}
                            </div>
                        </div>
                    </div>

                    {/*
                     Backlog Group, Epic, and Owners
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Backlog Group:</label>
                            <div className="value-container">
                                Group
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Epic:</label>
                            <div className="value-container">
                                {epic.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Owners</label>
                            <div className="value-container">
                                Danny
                            </div>
                        </div>
                    </div>

                    {/*
                     Priority, Risk, Class of Service
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Priority:</label>
                            <div className="value-container">
                                {priority.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Risk:</label>
                            <div className="value-container">
                                risk
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

                <div className="group">
                    {/*
                     Status, Tshirt Size,
                     */}
                    <div className="attributes">
                        <div className="attribute">
                            <label>Status:</label>
                            <div className="value-container">
                                {status.name}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>T-Shirt Size:</label>
                            <div className="value-container">
                                Large
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Other:</label>
                            <div className="value-container">
                                think of used field
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
                                {createDate}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Customer</label>
                            <div className="value-container">
                                FAAAP
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
                                {changeDate}
                            </div>
                        </div>

                        <div className="attribute">
                            <label>Date Completed:</label>
                            <div className="value-container">
                                -
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    {/*
                     Description
                     */}
                    <div className="attributes description">
                        <div>
                            <label>Description:</label>
                            <div className="value-container" dangerouslySetInnerHTML={{ __html: description }}></div>
                        </div>
                    </div>
                </div>

                <div>Relations</div>

                <div>{blockingIssuesList}</div>
                <div>{testsAndTasksList}</div>
            </div>
        )
    }
}