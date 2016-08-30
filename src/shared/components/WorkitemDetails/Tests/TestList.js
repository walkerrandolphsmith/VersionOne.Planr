import React from 'react';
import { EditIcon } from './../../Icons';
import { TestListRow } from './TestListRow'

export class TestList extends React.Component {
    render() {
        let { updateWorkitem } = this.props;
        let i = 0;
        const tests = this.props.tests.map(test => {
            return ( <TestListRow key={test.number} updateWorkitem={updateWorkitem} {...test}/> )
        });

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