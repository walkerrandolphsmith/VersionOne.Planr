import React, {Component, PropTypes} from 'react';

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: () => { console.log("I was not override"); }
    };

    render() {
        const {
            text,
            onClick
        } = this.props;

        return (
            <button className="button" onClick={onClick}>{text}</button>
        );
    }
}