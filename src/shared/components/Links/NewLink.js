import React from 'react';
import { Button } from './../common/Buttons';

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

    onEnter = (event) => {
        if(event.which === 13
            && this.state.name
            && this.state.url
            && this.state.url.startsWith('http')) {
            this.onSubmit();
        }
    };

    onSubmit = () => {
        this.props.addLink({ ...this.state });
        this.setState({ name: '', url: '' });
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
                    <input
                        onKeyPress={this.onEnter}
                        onChange={this.onChange.bind(this, 'url')}
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