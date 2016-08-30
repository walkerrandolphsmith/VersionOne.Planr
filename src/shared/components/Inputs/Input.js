import React from 'react';
import AbstractInput from './AbstractInput';

export default class Input extends AbstractInput {
    render() {
        const { value } = this.props;
        return (
            <input defaultValue={value}
                   placeholder="-"
                   onBlur={this.save.bind(this)}
                   onKeyDown={this.saveOrCancel.bind(this)} />
        );
    }
}