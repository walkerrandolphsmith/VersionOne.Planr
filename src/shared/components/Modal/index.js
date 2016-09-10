import React, { Component, PropTypes } from 'react';
import {
    unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';

function ancestorHasClass(element, classname) {
    if(!element.className || typeof element.className !== 'string')
        return false;
    else
        return element.className.split(' ').indexOf(classname) >= 0
            ? true
            : element.parentNode && ancestorHasClass(element.parentNode, classname);
}

class ModalPopup extends Component {
    static propTypes = {
        classNames: PropTypes.string,
        children: PropTypes.node,
        isOpen: PropTypes.bool
    };

    static defaultProps = {
        classNames: '',
        children: [],
        isOpen: false
    };

    render() {
        const { classNames, children } = this.props;
        const isOpen = this.props.isOpen ? 'open' : '';
        return (
            <div className={`modal-container ${isOpen} ${classNames}`}>
                {children}
            </div>
        );
    }
}

export class Modal extends Component {
    static propTypes = {
        classNames: PropTypes.string,
        children: PropTypes.node,
        isOpen: PropTypes.bool
    };

    static defaultProps = {
        classNames: '',
        children: [],
        isOpen: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            mountNode: null,
            isOpen: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isOpen: nextProps.isOpen });
    }

    componentWillMount() {
        const mountNode = document.createElement('div');
        mountNode.className  = 'planr-modal';
        document.body.appendChild(mountNode);
        this.setState({ mountNode: mountNode });
    }

    componentDidMount() {
        window.addEventListener('click', this.clickOutsideModalHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickOutsideModalHandler);
        if (this.state.mountNode) {
            unmountComponentAtNode(this.state.mountNode);
            this.state.mountNode.parentElement.removeChild(this.state.mountNode);
            this.setState({ mountNode: null });
        }
    }


    componentWillUpdate(nextProps, nextState) {
        const props = Object.assign({}, nextProps, nextState);
        renderSubtreeIntoContainer(
            this,
            (<ModalPopup {...props}>{props.children}</ModalPopup>),
            this.state.mountNode
        );
    }

    clickOutsideModalHandler = (event) => {
        const elm = event.target;
        const isMultiButtonAncestor = ancestorHasClass(elm, 'modal');
        if(!isMultiButtonAncestor) {
            event.stopPropagation();
            this.setState({ isShown: false });
        }
    };

    render() {
        return (
            <div></div>
        )
    }
}