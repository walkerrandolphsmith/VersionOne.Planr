import React from 'react'
import { Button } from './../Buttons'

export class TestTemplate extends React.Component {
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
        const { given, when, then } = this.state;
        const testName = `GIVEN ${given} WHEN ${when} THEN ${then}`;
        this.props.addTest(testName);
    }

    render() {
        return (
            <div className="test-template">
                <label for="given">Given:</label>
                <input id="given" name="given" type="text" size="100" onChange={this.onChange.bind(this, 'given')} />
                <label for="when">When:</label>
                <input id="when" name="when" type="text" size="100" onChange={this.onChange.bind(this, 'when')} />
                <label for="then">Then:</label>
                <input id="then" name="then" type="text" size="100" onChange={this.onChange.bind(this, 'then')} />
                <Button text="Save" onClick={this.onClick.bind(this)} />
            </div>
        )
    }
}