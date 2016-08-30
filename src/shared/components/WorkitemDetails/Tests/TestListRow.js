import React from 'react';
import { EditIcon } from './../../Icons';
import Textarea from 'react-textarea-autosize';

const ESCAPE = 27, ENTER = 13;

export class TestListRow extends React.Component {

    save(e){
        const newName = e.target.value;
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
                e.target.value = this.props.name;
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
                <tr id={oid} className={`${isSelected ? 'selected' : ''}`}>
                    <td className="number">{number}</td>
                    <td>
                        <Textarea onBlur={this.save.bind(this)}
                                  onKeyDown={this.saveOrCancel.bind(this)}
                                  className="name"
                                  defaultValue={name}></Textarea>
                    </td>
                    <td className="edit-icon"><EditIcon /></td>
                </tr>
            );
    }
}