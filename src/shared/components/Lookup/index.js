import React, { Component, PropTypes } from 'react';
import ResultItem from './ResultItem';

export class Lookup extends Component {
    static propTypes = {
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
        placeholder: '',
        results: [],
        classNames: '',
        width: 800,
        inputStyles: {},
        listStyles: {
            width: 500,
            padding: 10
        },
        resultStyles: {},
        onChange: () => {},
        onFocus: () => {},
        select: () => {}
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isOpen: false }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        const handleUp = () => { };
        const handleDown = () => { };
        const handleEnter = () => { };
        const handleEscape = () => {
            this.setState({ isOpen: false });
        };

        const keyPressMap = {
            38: handleUp,
            40: handleDown,
            13: handleEnter,
            27: handleEscape
        };

        if(keyPressMap[event.which]) {
            keyPressMap[event.which]();
        }
    }

    onChange(event) {
        this.props.onChange(event.target.value);
        this.setState({ isOpen: event.target.value.length > 0 });
    }

    onFocus(event) {
        this.props.onFocus()
    }

    selectCallback() {
        this.setState({ isOpen: false });
    }

    render() {
        const {
            placeholder,
            results,
            select,
            classNames,
            inputStyles,
            listStyles,
            resultStyles,
            width
        } = this.props;

        const { isOpen } = this.state;

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
            (result, i) => <ResultItem key={i}
                                       result={result}
                                       select={select}
                                       selectCallback={this.selectCallback.bind(this)}
                                       styles={finalItemStyles}
            />
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