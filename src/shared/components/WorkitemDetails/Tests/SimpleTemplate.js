import React from 'react'
import { Button } from './../../common/Buttons';
import Textarea from 'react-textarea-autosize';

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
        this.setState({
            name: ''
        });
    };

    onSaveAndNew = () => {
        this.save();
    };

    save = () => {
        let { name } = this.state;
        this.props.addTest(name);
        this.nameRef.focus();
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
                    <Textarea id="name" name="name" type="text"
                              ref={(c) => this.nameRef = c}
                              value={this.state.name}
                              onKeyDown={this.onKeyDown}
                              onChange={this.onChange} />
                    <div className="add-test-buttons">
                        <Button text="Save" onClick={this.onClick} />
                        <Button text="Save and New" onClick={this.onSaveAndNew} />
                    </div>
                </div>
            </div>
        )
    }
}