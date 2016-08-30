import React from 'react';

const ESCAPE = 27,
    ENTER = 13;

export default class AbstractInput extends React.Component {
    save(e){
        const newValue = e.target.value;
        if(newValue != this.props.value){
            this.props.updateValue(newValue);
        }
    }

    saveOrCancel(e){
        switch(e.which){
            case ESCAPE:
                e.target.value = this.props.value;
                break;
            case ENTER:
                e.target.blur();
                e.preventDefault();
                break;
        }
    }
}