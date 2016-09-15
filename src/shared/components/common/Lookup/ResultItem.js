import React, { Component, PropTypes } from 'react';
import { EpicIcon } from './../Icons';

export default class ResultItem extends Component {
    static propTypes = {
        result: PropTypes.object,
        resultClassNameField: PropTypes.string,
        isHovered: PropTypes.bool,
        select: PropTypes.func,
        classNames: PropTypes.string,
        styles: PropTypes.object
    };

    static defaultProps = {
        result: {
            text: ''
        },
        isHovered: false,
        select: () => {},
        classNames: '',
        styles: {}
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isHovered: props.isHovered };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isHovered: nextProps.isHovered });
    }

    onClick = () => {
        this.props.select(this.props.result);
        this.props.selectCallback();
    };

    onMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    onMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const {
            result,
            resultClassNameField,
            classNames,
            styles
        } = this.props;
        const chain = resultClassNameField.split('.');
        const className = chain.reduce((className, c) => className[c],result);

        const {
            isHovered
        } = this.state;

        const { width, padding } = styles;
        const sidesWidth = 20;
        const middleWidth = width - (3 * sidesWidth);
        const middleLeftOffset = 10;

        const childrenHeight = '35px';

        const parentStyles = {
            width: `${width}px`,
            cursor: 'pointer',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            padding: `${padding}px`,
            borderBottom: '1px solid rgba(0,0,0,0.2)'
        };

        const finalParentStyles = merge(styles, parentStyles);

        const leftStyles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: 1,
            flexBasis: `${sidesWidth}px`,
            minHeight: childrenHeight
        };

        const middleStyles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: 2,
            flexBasis: `${middleWidth - middleLeftOffset}px`,
            paddingLeft: `${middleLeftOffset}px`,
            minHeight: childrenHeight
        };

        return (
            <div style={finalParentStyles}
                 className={`result ${isHovered ? 'hovered' : ''} ${className} ${classNames}`}
                 onClick={this.onClick}
                 onMouseEnter={this.onMouseEnter}
                 onMouseLeave={this.onMouseLeave}
            >
                <div style={leftStyles}>
                    <EpicIcon />
                </div>
                <div style={middleStyles}>
                    {result.text}
                </div>
            </div>
        );
    }
}

const merge = (x, y) => {
    const obj3 = {};
    for (var prop in x) { obj3[prop] = x[prop]; }
    for (var prop in y) { obj3[prop] = y[prop]; }
    return obj3;
};