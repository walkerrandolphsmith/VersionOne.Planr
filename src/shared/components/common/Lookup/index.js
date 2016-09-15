import React, { Component, PropTypes } from 'react';
import ResultItem from './ResultItem';

export class Lookup extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        results: PropTypes.array,
        classNames: PropTypes.string,
        resultClassNameField: PropTypes.string,
        width: PropTypes.number,
        inputStyles: PropTypes.object,
        listStyles: PropTypes.object,
        resultStyles: PropTypes.object,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        select: PropTypes.func,
        deSelect: PropTypes.func
    };

    static defaultProps = {
        placeholder: '',
        results: [],
        classNames: '',
        resultClassNameField: '',
        width: 800,
        inputStyles: {},
        listStyles: {
            width: 500,
            padding: 10
        },
        resultStyles: {},
        onChange: () => {},
        onFocus: () => {},
        select: () => {},
        deSelect: () => {}
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            query: '',
            isOpen: false,
            hovered: -1
        }
    }

    handleKeyPress = (event) => {
        const handleUp = () => {
            const max = this.props.results.length;
            const nextHovered = (this.state.hovered + max - 1) % max;
            this.setState({ hovered: nextHovered });
        };

        const handleDown = () => {
            const max = this.props.results.length;
            const nextHovered = (this.state.hovered + 1) % max;
            this.setState({ hovered: nextHovered });
        };

        const handleEnter = () => {
            this.props.select(this.props.results[this.state.hovered]);
            this.setState({ query: '', isOpen: false });
        };

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
    };

    onChange = (event) => {
        const query = event.target.value;
        this.props.onChange(query);
        this.setState({
            query: query,
            isOpen: event.target.value.length > 0
        });
    };

    onFocus = (event) => {
        this.props.onFocus();
    };

    selectCallback = () => {
        this.setState({ query: '', isOpen: false });
    };

    render() {
        const {
            selected,
            placeholder,
            results,
            select,
            deSelect,
            classNames,
            inputStyles,
            listStyles,
            resultStyles,
            width,
            resultClassNameField
        } = this.props;

        const { query, isOpen, hovered } = this.state;

        const finalInputStyles = Object.assign({
            WebkitAppearance: 'none',
            boxSizing: 'border-box',
            padding: '10px',
            border: 'solid 1px #dcdcdc',
            transition: 'box-shadow 0.3s, border 0.3s'
        }, inputStyles);

        const resultWidth = listStyles.width ? parseInt(listStyles.width) : 280;
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
                                       resultClassNameField={resultClassNameField}
                                       isHovered={hovered === i}
                                       select={select}
                                       selectCallback={this.selectCallback}
                                       styles={finalItemStyles}
            />
        );

        const isResultSelected = selected ? 'flex' : 'none';

        return (
            <div className={`lookup ${classNames}`} ref="lookup">
                <span className="selected" style={{ display: isResultSelected }}>
                    <span className="selected-label">{selected}</span>
                    <span className="un-select" onClick={deSelect} />
                </span>
                <input value={query}
                       disabled={selected}
                       style={finalInputStyles}
                       type="text"
                       placeholder={placeholder}
                       onKeyDown={this.handleKeyPress}
                       onChange={this.onChange}
                       onFocus={this.onFocus}
                />
                <div style={finalListStyles} className="results-list">{resultItems}</div>
            </div>
        );
    }
}