import React from 'react';
import AbstractInput from './AbstractInput';

export default class AutoGrowInput extends AbstractInput {


    constructor(props, context) {
        super(props, context);
        this.state.width = (this.state.value || "-").length * 30
    }

    getWidth(value) {
        return ((value || '-').length) * 30;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value,
            width: this.getWidth(nextProps.value)
        });
    }

    onChange(event) {
        this.handleChange(event);
        //state change to value doesn't update from handleChange at this point
        this.setState({ width: this.getWidth(event.target.value) });
    }

    render() {
        const { value, width } = this.state;
        const style = {
            width: `${width}px`,
            maxWidth: '90px'
        };

        return (
            <input style={style}
                   placeholder="--"
                   onBlur={this.save.bind(this)}
                   onKeyDown={this.saveOrCancel.bind(this)}
                   onChange={this.onChange.bind(this)}
                   value={value}
            />
        );
    }
}