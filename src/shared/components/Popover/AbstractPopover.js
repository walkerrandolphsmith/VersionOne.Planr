import React, { Component, PropTypes } from 'react';

export default class AbstractPopover extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string
    };

    static defaultProps = {
        children: [],
        className: ''
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isOpen: false }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isOpen: nextProps.isOpen });
    }

    clickHandler = () => {

    };

    open = () => {

    };

    close = () => {

    };

    render() {
        const { className, target, children} = this.props;
        const { isOpen } = this.state;
        return (
            <span className={`hover-popover ${className}`}
                  onClick={this.clickHandler} onMouseEnter={this.open} onMouseLeave={this.close}>
                {target}
                <div className={`popover-container ${isOpen ? 'open' : 'closed'}`}>
                    <div>
                        {children}
                    </div>
                </div>
            </span>
        )
    }
}