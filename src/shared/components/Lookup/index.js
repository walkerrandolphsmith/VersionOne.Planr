import React, { Component, PropTypes } from 'react';
import ResultItem from './ResultItem';

export class Lookup extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        placeholder: PropTypes.string,
        results: PropTypes.array,
        classNames: PropTypes.string,
        width: PropTypes.number,
        inputStyles: PropTypes.object,
        listStyles: PropTypes.object,
        resultStyles: PropTypes.object,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        select: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        placeholder: '',
        results: [],
        classNames: '',
        width: 800,
        inputStyles: {

        },
        listStyles: {
            width: 500,
            padding: 10
        },
        resultStyles: {

        },
        onChange: () => {},
        onFocus: () => {},
        select: () => {}
    };

    onChange(event) {
        this.props.onChange(event.target.value);
    }

    onFocus(event) {
        this.props.onFocus()
    }

    render() {
        const {
            isOpen,
            placeholder,
            results,
            select,
            classNames,
            inputStyles,
            listStyles,
            resultStyles,
            width
        } = this.props;

        const finalInputStyles = Object.assign({
            WebkitAppearance: 'none',
            boxSizing: 'border-box',
            width: width,
            height: '25px',
            padding: '10px',
            border: 'solid 1px #dcdcdc',
            transition: 'box-shadow 0.3s, border 0.3s'
        }, inputStyles);

        const resultWidth = listStyles.width ? parseInt(listStyles.width) : 500;
        const resultPadding = listStyles.padding ? parseInt(listStyles.padding) : 10;

        const finalListStyles = Object.assign(
            {
                borderRight: '1px solid rgba(0,0,0,0.2)',
                borderLeft: '1px solid rgba(0,0,0,0.2)',
                borderTop: '1px solid rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(0,0,0,0.2)'
            },
            listStyles,
            {
                display: isOpen ? 'block' : 'none',
                width: resultWidth + (2 * resultPadding),
                padding: 0
            }
        );

        const finalItemStyles = Object.assign(resultStyles, {
            width: resultWidth + (2 * resultPadding),
            padding: resultPadding
        });

        const resultItems = results.map(
            (result, i) => <ResultItem key={i} result={result} select={select} styles={finalItemStyles} />
        );

        return (
            <div className={`lookup ${classNames}`} ref="lookup">
                <input style={finalInputStyles}
                       type="text"
                       placeholder={placeholder}
                       onChange={this.onChange.bind(this)}
                       onFocus={this.onFocus.bind(this)}
                />
                <div style={finalListStyles}>{resultItems}</div>
            </div>
        );
    }
}