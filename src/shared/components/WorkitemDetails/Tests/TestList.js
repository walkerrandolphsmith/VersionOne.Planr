import React from 'react';
import { TestListRow } from './TestListRow'

export class TestList extends React.Component {
    render() {
        const { updateTest, deleteTest } = this.props;
        const tests = this.props.tests.map(test => (
            <TestListRow key={test.number} updateTest={updateTest} deleteTest={deleteTest} {...test}/>
        ));

        return (
            <div className="tests-table">
                <table className="grid">
                    <colgroup>
                        <col className="number" />
                        <col className="name" />
                        <col className="delete-icon" />
                    </colgroup>
                    <tbody>
                    {tests}
                    </tbody>
                </table>
            </div>
        )
    }
}