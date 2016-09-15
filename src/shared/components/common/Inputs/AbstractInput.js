import React from 'react';

const ESCAPE = 27,
    ENTER = 13;

export default class AbstractInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: this.props.value };
    }

    componentWillReceiveProps(nextProps){
        this.setState({ value: nextProps.value });
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    save = (e) => {
        const newValue = e.target.value;
        if(newValue != this.props.value){
            this.props.updateValue(newValue);
        }
    };

    saveOrCancel = (e) => {
        switch(e.which){
            case ESCAPE:
                e.target.value = this.props.value;
                break;
            case ENTER:
                e.target.blur();
                e.preventDefault();
                break;
        }
    };
}