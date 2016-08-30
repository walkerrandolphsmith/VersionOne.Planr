import React from 'react';
import Textarea from 'react-textarea-autosize';
import AbstractInput from './AbstractInput';

export default class TextArea extends AbstractInput {
    render() {
        const { value } = this.state;
        return (
            <Textarea onBlur={this.save.bind(this)}
                      onKeyDown={this.saveOrCancel.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      value={value}
            />
        );
    }
}