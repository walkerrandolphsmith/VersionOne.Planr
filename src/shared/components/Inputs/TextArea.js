import React from 'react';
import Textarea from 'react-textarea-autosize';
import AbstractInput from './AbstractInput';

export default class TextArea extends AbstractInput {
    render() {
        const { value } = this.props;
        return (
            <Textarea onBlur={this.save.bind(this)}
                      onKeyDown={this.saveOrCancel.bind(this)}
                      className="name"
                      defaultValue={value} />
        );
    }
}