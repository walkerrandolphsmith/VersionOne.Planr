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
        this.save();
    }

    save(){
        let { given, when, then } = this.state;
        const testName = `Given ${given} When ${when} Then ${then}`;
        this.props.addTest(testName);
    }

    onKeyDown(e){
        if(e.which == 13){
            this.save();
        }
    }

    render() {
        return (
            <div className="bdd-form">
                <p>
                    <label htmlFor="given">Given:</label>
                    <input id="given" name="given" type="text" onChange={this.onChange.bind(this, 'given')} />
                </p>
                <p>
                    <label htmlFor="when">When:</label>
                    <input id="when" name="when" type="text" onChange={this.onChange.bind(this, 'when')} />
                </p>
                <p>
                    <label htmlFor="then">Then:</label>
                    <input id="then" name="then" type="text" onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this, 'then')} />
                </p>
                <Button text="Add" onClick={this.onClick.bind(this)} />
            </div>
        )
    }
}