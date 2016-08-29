import React from 'react';
import { EditIcon } from './../Icons';

export class TestList extends React.Component {

    render() {
        let i = 0;
        const tests = this.props.tests.map(test => {
            return (
                <tr key={test.number} id={test.oid}
                    className={`${test.isSelected ? 'selected' : ''} ${test.isHovered ? 'hovered' : ''}`}
                  >
                    <td className="number">{test.number}</td>
                    <td className="name">{test.name}</td>
                    <td className="edit-icon"><EditIcon /></td>
                </tr>
            )
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