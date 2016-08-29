import React from 'react'
import { Button } from './../../Buttons'

export class BddTemplate extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            given: '',
            when: '',
            then: ''
        };
    }

    onChange(field, event) {
        const value = event.target.value;
        this.setState({
            [field]: value
        });
    };

    onClick() {
        let { given, when, then } = this.state;
        const testName = `GIVEN ${given} WHEN ${when} THEN ${then}`;
        this.props.addTest(testName);
    }

    render() {
        return (
            <div>
                <label htmlFor="given">Given:</label>
                <input id="given" name="given" type="text" onChange={this.onChange.bind(this, 'given')} />
                <label htmlFor="when">When:</label>
                <input id="when" name="when" type="text" onChange={this.onChange.bind(this, 'when')} />
                <label htmlFor="then">Then:</label>
                <input id="then" name="then" type="text" onChange={this.onChange.bind(this, 'then')} />
                <Button text="Save" onClick={this.onClick.bind(this)} />
            </div>
        )
    }
}