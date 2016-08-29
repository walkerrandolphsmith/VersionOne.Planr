import React from 'react'

export class SimpleTemplate extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: ''
        };
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            name: value
        });
    };

    onClick() {
        let { name } = this.state;
        this.props.addTest(name);
    }

    render() {
        return (
            <div>
                <label for="name">Name:</label>
                <input id="name" name="name" type="text" onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}