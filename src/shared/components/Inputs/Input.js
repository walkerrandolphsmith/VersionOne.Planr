import React from 'react';
import AbstractInput from './AbstractInput';

export default class Input extends AbstractInput {
    render() {
        const { value } = this.state;
        return (
            <input placeholder="-"
                   onBlur={this.save.bind(this)}
                   onKeyDown={this.saveOrCancel.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   value={value}
            />
        );
    }
}