import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as WorkitemActions } from './../atoms/workitem';

export class WorkitemDetailsContainer extends React.Component {

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
            oid,
            assetType,
            number,
            name,
            scope,
            changeDate,
            classOfService,
            estimate,
            status,
            blockingIssues,
            owners,
            children
        } = this.state;

        const blockingIssuesList = blockingIssues.map(blockingIssue => <div key={blockingIssue}>{blockingIssue}</div>);
        const ownersList = owners.map(owner => <div key={owner}>{owner}</div>);
        const testsAndTasksList = children.map(child => <div key={child}>{child}</div>);

        return (
            <div>
                <div>{oid}</div>
                <input type="text" onChange={this.updateName.bind(this)} value={this.state.name} />
                <div>{name}</div>
                <div>{number}</div>
                <div>{changeDate}</div>
                <div>{scope}</div>
                <div>{classOfService}</div>
                <div>{estimate}</div>
                <div>{status}</div>
                <div>{blockingIssuesList}</div>
                <div>{ownersList}</div>
                <div>{testsAndTasksList}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        workitem: state.workitemStateAtom.get('workitems').get(state.workitemStateAtom.get('selected'))
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export const WorkitemDetails = connect(mapStateToProps, mapDispatchToProps)(WorkitemDetailsContainer);