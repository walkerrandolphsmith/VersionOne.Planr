import React from 'react';
import { DeleteIcon } from './../Icons';

export class Link extends React.Component {

    onClick = () => {

    };

    render() {
        const { name, url } = this.props;

        return (
            <tr>
                <td className="name">{name}</td>
                <td className="url"><a href={url} target="_blank">{url}</a></td>
                <td className="delete-icon">
                    <span onClick={this.onClick}>
                        <DeleteIcon />
                    </span>
                </td>
            </tr>
        )
    }
}