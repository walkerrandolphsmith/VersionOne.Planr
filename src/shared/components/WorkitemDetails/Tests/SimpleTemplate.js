import React from 'react'

const ENTER = 13;
export class SimpleTemplate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { name: '' };
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ name: value });
    };

    onClick = () => {
        this.save();
    };

    save = () => {
        let { name } = this.state;
        this.props.addTest(name);
    };

    onKeyDown = (e) => {
        if(e.which == ENTER){
            this.save();
        }
    };

    render() {
        return (
            <div className="test-form-container">
                <div className="test-form">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" onKeyDown={this.onKeyDown} onChange={this.onChange} />
                </div>
            </div>
        )
    }
}