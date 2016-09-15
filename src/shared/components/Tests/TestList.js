import React from 'react';
import { TestListRow } from './TestListRow'

export class TestList extends React.Component {
    render() {
        const { updateTest, deleteTest, recentlyAddedTest } = this.props;

        const mostRecentTest = (
            <TestListRow isRecent={recentlyAddedTest}
                         updateTest={updateTest}
                         deleteTest={deleteTest}
                         {...this.props.tests[0]}
            />
        );

        const tests = this.props.tests.slice(1, this.props.tests.length).map(test => (
            <TestListRow key={test.number} updateTest={updateTest} deleteTest={deleteTest} {...test} />
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
                    {mostRecentTest}
                    {tests}
                    </tbody>
                </table>
            </div>
        )
    }
}