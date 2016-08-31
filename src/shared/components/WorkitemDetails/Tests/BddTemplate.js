import React from 'react'
import { Button } from './../../Buttons'
import Textarea from 'react-textarea-autosize';
const ENTER = 13;
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

    save() {
        let { given, when, then } = this.state;
        const testName = `Given ${given} When ${when} Then ${then}`;
        this.props.addTest(testName);
        this.givenRef.focus();
    }

    onKeyDown(e){
        if(e.which == ENTER){
            this.save();
            e.preventDefault();
        }
    }

    preventEnter(e){
        if(e.which == ENTER){
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="test-form">
                <p>
                    <label htmlFor="given">Given:</label>
                    <Textarea id="given" name="given" type="text"
                              ref={(c) => this.givenRef = c}
                              onKeyDown={this.preventEnter.bind(this)}
                              onChange={this.onChange.bind(this, 'given')} />
                </p>
                <p>
                    <label htmlFor="when">When:</label>
                    <Textarea id="when" name="when" type="text"
                              ref={(c) => this.whenRef = c}
                              onKeyDown={this.preventEnter.bind(this)}
                              onChange={this.onChange.bind(this, 'when')} />
                </p>
                <p>
                    <label htmlFor="then">Then:</label>
                    <Textarea id="then" name="then" type="text"
                              ref={(c) => this.thenRef = c}
                              onKeyDown={this.onKeyDown.bind(this)}
                              onChange={this.onChange.bind(this, 'then')} />
                </p>
                <Button text="Add" onClick={this.onClick.bind(this)} />
            </div>
        )
    }
}