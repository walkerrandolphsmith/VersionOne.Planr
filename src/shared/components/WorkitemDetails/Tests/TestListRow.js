import React from 'react';
import { DeleteIcon } from './../../Icons';
import { TextArea } from './../../Inputs';

export class TestListRow extends React.Component {
    updateName = (newValue) => {
        this.props.updateTest({
            oid: this.props.oid,
            assetData: {
                name: newValue
            }
        });
    };

    onClick = () => {
        this.props.deleteTest(this.props.oid);
    };

    render() {
        const { name, number, oid, isSelected} = this.props;
            return (
                <tr id={oid} className={`${isSelected ? 'selected' : ''}`}>
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