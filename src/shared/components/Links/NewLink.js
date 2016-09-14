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
            <div>
                <div>
                    <label>Name: </label>
                    <input onChange={this.onChange.bind(this, 'name')} value={name} />
                    <label>Url: </label>
                    <input onChange={this.onChange.bind(this, 'url')} value={url} />
                </div>
                <Button text="Add" onClick={this.onSubmit} />
            </div>
        )
    }
}