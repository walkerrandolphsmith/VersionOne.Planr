import React, {Component, PropTypes} from 'react';
import { ChevronIcon } from './../Icons';

function ancestorHasClass(element, classname) {
    if(!element.className || typeof element.className !== 'string')
        return false;
    else
        return element.className.split(' ').indexOf(classname) >= 0
            ? true
            : element.parentNode && ancestorHasClass(element.parentNode, classname);
}

export default class MultiButton extends Component {
    static propTypes = {
        children: PropTypes.node,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        isDisabled: PropTypes.bool
    };

    static defaultProps = {
        children: [],
        onClick: () => { },
        isDisabled: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isShown: false }
    }

    componentDidMount() {
        window.addEventListener('click', this.clickOutsideButtonHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickOutsideButtonHandler);
    }

    clickOutsideButtonHandler = (event) => {
        const elm = event.target;
        const isMultiButtonAncestor = ancestorHasClass(elm, 'multi-button');
        if(!isMultiButtonAncestor) {
            event.stopPropagation();
            this.setState({ isShown: false });
        }
    };

    openOptions = () => {
        if (!this.props.isDisabled) {
            this.setState({ isShown: !this.state.isShown });
        }
    };

    onClick = () => {
        if (!this.props.isDisabled) {
            this.props.onClick();
        }
    };

    render() {
        const { text, children, isDisabled } = this.props;
        const { isShown } = this.state;

        return (
            <div className={`multi-button button ${isDisabled ? 'disabled' : ''}`}>
                <span className="quick-action" onClick={this.onClick}>{text}</span>
                <span className="all-actions" onClick={this.openOptions}>
                    <ChevronIcon />
                     <div className={`multi-button-options ${isShown ? 'expanded' : ''}`}>
                        {children}
                    </div>
                </span>
            </div>
        );
    }
}