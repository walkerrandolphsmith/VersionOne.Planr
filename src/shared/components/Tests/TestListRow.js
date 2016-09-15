import React from 'react';
import { DeleteIcon } from './../common/Icons';
import { TextArea } from './../common/Inputs';

export class TestListRow extends React.Component {
    updateName = (newValue) => {
        this.props.updateTest({
            oid: this.props.oid,
            assetData: {
                Name: newValue
            }
        });
    };

    onClick = () => {
        this.props.deleteTest(this.props.oid);
    };

    render() {
        const { name, number, oid, isSelected, isRecent} = this.props;
        const className = `${isSelected ? 'selected' : ''} ${isRecent ? 'recent': ''}`;
            return (
                <tr id={oid} className={className}>
                    <td className="number">{number}</td>
                    <td>
                        <TextArea value={name} updateValue={this.updateName} />
                    </td>
                    <td className="delete-icon">
                        <span onClick={this.onClick}>
                            <DeleteIcon />
                        </span>
                    </td>
                </tr>
            );
    }
}