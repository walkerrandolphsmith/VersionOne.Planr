import React from 'react';
import AbstractInput from './AbstractInput';

export default class Input extends AbstractInput {
    render() {
        const { value } = this.state;
        return (
            <input placeholder="--"
                   onBlur={this.save}
                   onKeyDown={this.saveOrCancel}
                   onChange={this.handleChange}
                   value={value}
            />
        );
    }
}