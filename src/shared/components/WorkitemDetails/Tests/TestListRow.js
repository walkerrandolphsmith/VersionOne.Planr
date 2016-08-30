import React from 'react';
import { EditIcon } from './../../Icons';

const ESCAPE = 27, ENTER = 13;

export class TestListRow extends React.Component {

    save(e){
        const newName = e.target.innerText;
        if(newName != this.props.name){

            this.props.updateWorkitem({
                oid: this.props.oid,
                assetData: {
                    name: newName
                }
            });

        }
    }

    saveOrCancel(e){
        switch(e.which){
            case ESCAPE:
                e.target.innerText = this.props.name;
                break;
            case ENTER:
                e.target.blur();
                e.preventDefault();
                break;
        }
    }

    render() {
        let { name, number, oid, isSelected} = this.props;
            return (
                <tr id={oid}
                    className={`${isSelected ? 'selected' : ''}`}
                >
                    <td className="number">{number}</td>
                    <td contentEditable="true"
                        onBlur={this.save.bind(this)}
                        onKeyDown={this.saveOrCancel.bind(this)}
                        className="name">{name}</td>
                    <td className="edit-icon"><EditIcon /></td>
                </tr>
            );
    }
}