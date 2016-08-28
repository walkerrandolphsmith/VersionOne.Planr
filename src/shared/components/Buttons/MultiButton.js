import React, {Component, PropTypes} from 'react';
import { ChevronIcon } from './../Icons';

export default class MultiButton extends Component {
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
            <div className="mulit-button button">
                <span className="quick-action" onClick={onClick}>{text}</span>
                <span className="all-actions">
                    <ChevronIcon />
                </span>
            </div>
        );
    }
}