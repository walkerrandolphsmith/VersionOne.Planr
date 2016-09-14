import React from 'react';
import { Button } from './../Buttons';

export class NewLink extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            url: ''
        }
    }

    onChange = (field, event) => {
        this.setState({ [field]: event.target.value });
    };

    onSubmit = () => {
        this.props.addLink({ ...this.state })
    };

    render() {
        const { name, url } = this.state;

        return (
            <tr className="new-link">
                <td className="name">
                    <label>Name: </label>
                    <input onChange={this.onChange.bind(this, 'name')}
                           value={name}
                           placeholder="Add a name"
                    />
                </td>
                <td className="url">
                    <label>Url: </label>
                    <input onChange={this.onChange.bind(this, 'url')}
                           value={url}
                           placeholder="Add the url"
                    />
                </td>
                <td>
                    <Button text="Add" onClick={this.onSubmit} />
                </td>
            </tr>
        );
    }
}