import React from 'react';
import { EditIcon } from './../../Icons';
import { TestListRow } from './TestListRow'

export class TestList extends React.Component {
    render() {
        const { updateWorkitem, deleteTest } = this.props;
        const tests = this.props.tests.map(test => (
            <TestListRow key={test.number} updateWorkitem={updateWorkitem} deleteTest={deleteTest} {...test}/>
        ));

        return (
            <div className="tests-table">
                <table className="grid">
                    <colgroup>
                        <col className="number" />
                        <col className="name" />
                        <col className="edit-icon" />
                    </colgroup>
                    <tbody>
                    {tests}
                    </tbody>
                </table>
            </div>
        )
    }
}