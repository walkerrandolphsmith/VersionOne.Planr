import React from 'react';
import Textarea from 'react-textarea-autosize';
import AbstractInput from './AbstractInput';

export default class TextArea extends AbstractInput {
    render() {
        const { value } = this.state;
        return (
            <Textarea onBlur={this.save}
                      onKeyDown={this.saveOrCancel}
                      onChange={this.handleChange}
                      value={value}
            />
        );
    }
}