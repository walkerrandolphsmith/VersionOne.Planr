import React from 'react'
import { Button } from './../common/Buttons'
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

    onClick = () => {
        this.save();
        this.setState({
            given: '',
            when: '',
            then: ''
        });
    };

    onSaveAndNew = () => {
        this.save();
    };

    save = () => {
        let { given, when, then } = this.state;
        if(!given) {
            this.givenRef.focus();
            return;
        } else if(!when) {
            this.whenRef.focus();
            return;
        } else if(!then) {
            this.thenRef.focus();
            return;
        }
        const testName = `Given ${given} When ${when} Then ${then}`;
        this.props.addTest(testName);
        this.givenRef.focus();
    };

    onKeyDown = (e) => {
        if(e.which == ENTER){
            this.save();
            e.preventDefault();
        }
    };

    preventEnter = (e) => {
        if(e.which == ENTER){
            const elementMap = {
                'given': () => { this.whenRef.focus(); },
                'when': () => { this.thenRef.focus(); }
            };
            if(elementMap[e.target.id]) {
                elementMap[e.target.id]();
            }
            e.preventDefault();
        }
    };

    render() {
        const { given, when, then } = this.state;
        return (
            <div className="test-form-container">
                <div className="test-form">
                    <p>
                        <label htmlFor="given">Given:</label>
                        <Textarea id="given" name="given" type="text"
                                  ref={(c) => this.givenRef = c}
                                  value={given}
                                  onKeyDown={this.preventEnter}
                                  onChange={this.onChange.bind(this, 'given')} />
                    </p>
                    <p>
                        <label htmlFor="when">When:</label>
                        <Textarea id="when" name="when" type="text"
                                  ref={(c) => this.whenRef = c}
                                  value={when}
                                  onKeyDown={this.preventEnter}
                                  onChange={this.onChange.bind(this, 'when')} />
                    </p>
                    <p>
                        <label htmlFor="then">Then:</label>
                        <Textarea id="then" name="then" type="text"
                                  ref={(c) => this.thenRef = c}
                                  value={then}
                                  onKeyDown={this.onKeyDown}
                                  onChange={this.onChange.bind(this, 'then')} />
                    </p>
                    <div className="add-test-buttons">
                        <Button text="Save" onClick={this.onClick} />
                        <Button text="Save and New" onClick={this.onSaveAndNew} />
                    </div>
                </div>
            </div>
        )
    }
}