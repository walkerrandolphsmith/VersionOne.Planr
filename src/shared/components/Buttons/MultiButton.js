import React, {Component, PropTypes} from 'react';
import {
    unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';
import { ChevronIcon } from './../Icons';

const magicWidthOfContainer = 150;

export default class MultiButton extends Component {
    static propTypes = {
        children: PropTypes.node,
        classNames: PropTypes.string,
        styles: PropTypes.object,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        children: [],
        classNames: '',
        styles: {},
        onClick: () => { console.log("I was not override"); }
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            mountNode: null,
            isShown: false
        }
    }

    componentWillMount() {
        const mountNode = document.createElement('div');
        mountNode.className  = 'MultiButtonOptions';
        document.body.appendChild(mountNode);
        this.setState({ mountNode: mountNode });
    }

    componentWillUnmount() {
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
            (<MultiButtonPortal {...props}>{this.props.children}</MultiButtonPortal>),
            this.state.mountNode
        );
    }

    openOptions(event) {
        const anchor = event.currentTarget;
        const position = anchor.getBoundingClientRect();

        this.setState({
            isShown: !this.state.isShown,
            top: position.bottom,
            left: position.right - magicWidthOfContainer
        });
    }


    render() {
        const {
            text,
            onClick
        } = this.props;

        return (
            <div className="multi-button button" ref="multi-button">
                <span className="quick-action" onClick={onClick}>{text}</span>
                <span className="all-actions" onClick={this.openOptions.bind(this)}>
                    <ChevronIcon />
                </span>
            </div>
        );
    }
}

class MultiButtonPortal extends Component {
    static propTypes = {
        children: PropTypes.node,
        isShown: PropTypes.bool,
        top: PropTypes.number,
        left: PropTypes.number,
        classNames: PropTypes.string,
        styles: PropTypes.object
    };

    static defaultProps = {
        children: [],
        isShown: false,
        top: 0,
        left: 0,
        classNames: '',
        styles: {}
    };

    render() {
        const { children, isShown, top, left, classNames, styles } = this.props;
        const finalStyles = Object.assign(
            {
                zIndex: '1000',
                width: `${magicWidthOfContainer}px`,
                cursor: 'pointer'
            },
            styles,
            {
                position: 'absolute',
                overflow: 'hidden',
                top: top,
                left: left,
                display: isShown ? 'block' : 'none'
            }
        );

        return (
            <div className={`multi-button-options ${classNames}`} style={finalStyles} >
                {children}
            </div>
        );
    }
}