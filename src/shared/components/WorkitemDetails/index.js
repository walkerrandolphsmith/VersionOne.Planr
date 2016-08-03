import React from 'react';

export class WorkitemDetails extends React.Component {

    static defaultProps = {
        workitem: {
            oid: '',
            assetType: '',
            number: '',
            name: '',
            scope: '',
            changeDate: '',
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
            scope: wi.scope,
            changeDate: wi.changeDate,
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
            scope: wi.scope,
            changeDate: wi.changeDate,
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
            scope,
            changeDate,
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
                <div>{changeDate}</div>
                <div>{scope.name}</div>
                <div>{classOfService.name}</div>
                <div>{estimate}</div>
                <div>{status.name}</div>
                <div>{blockingIssuesList}</div>
                <div>{testsAndTasksList}</div>
            </div>
        )
    }
}