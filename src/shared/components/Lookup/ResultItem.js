import React, { Component, PropTypes } from 'react';
import { EpicIcon } from './../Icons';

export default class ResultItem extends Component {
    static propTypes = {
        result: PropTypes.object,
        select: PropTypes.func,
        classNames: PropTypes.string,
        styles: PropTypes.object
    };

    static defaultProps = {
        result: {
            text: ''
        },
        select: () => {

        },
        classNames: '',
        styles: {

        }
    };

    onClick() {
        this.props.select(this.props.result);
    }

    render() {
        const {
            result,
            classNames,
            styles
        } = this.props;

        const {
            text
        } = result;

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
            height: childrenHeight
        };

        const middleStyles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: 2,
            flexBasis: `${middleWidth - middleLeftOffset}px`,
            paddingLeft: `${middleLeftOffset}px`,
            height: childrenHeight
        };

        return (
            <div style={finalParentStyles} className={`result ${classNames}`} onClick={this.onClick.bind(this)}>
                <div style={leftStyles}>
                    <EpicIcon />
                </div>
                <div style={middleStyles}>
                    {text}
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