import React, { Component, PropTypes } from 'react';
import {
    unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';

function ancestorHasClass(element, classname) {
    if(!element.className || typeof element.className !== 'string')
        return element.parentNode && ancestorHasClass(element.parentNode, classname);
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
        return (
            <div className={`modal-container ${classNames}`}>
                {children}
            </div>
        );
    }
}

export default class Modal extends Component {
    static propTypes = {
        classNames: PropTypes.string,
        children: PropTypes.node,
        isOpen: PropTypes.bool,
        onRequestClose: PropTypes.func
    };

    static defaultProps = {
        classNames: '',
        children: [],
        isOpen: false,
        onRequestClose: () => {}
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
        this.state.mountNode.className = `modal ${this.state.isOpen ? 'open' : ''}`;
    }

    componentWillMount() {
        const mountNode = document.createElement('div');
        mountNode.className  = 'modal';
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
        const shouldClose = !ancestorHasClass(elm, 'modal-container') || ancestorHasClass(elm, 'close-modal');
        if(shouldClose) {
            event.stopPropagation();
            this.props.onRequestClose();
        }
    };

    render() {
        return (
            <div></div>
        )
    }
}