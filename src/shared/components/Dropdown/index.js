import React, {Component, PropTypes} from 'react';
import { ChevronIcon } from './../Icons';

const magicWidthOfContainer = 150;

export class Dropdown extends Component {
    static propTypes = {
        children: PropTypes.node,
        classNames: PropTypes.string,
        styles: PropTypes.object,
        selectedOption: PropTypes.string
    };

    static defaultProps = {
        children: [],
        classNames: '',
        styles: {},
        selectedOption: '-'
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShown: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isShown: nextProps.isOpen
        });
    }

    onClick(i) {
        this.props.onClick(i);
        this.setState({
            isShown: false
        })
    }

    toggle(event) {
        this.setState({ isShown: !this.state.isShown });
    }

    render() {
        const { isShown } = this.state;

        const { selectedOption } = this.props;

        const dropdownStyles = {
            height: '18px'
        };

        const optionsStyles = {
            position: 'absolute',
            top: '18px'
        };

        if(isShown) {
            optionsStyles.minHeight = '18px'
        } else {
            optionsStyles.height = '0';
            optionsStyles.minHeight = '0';
        }

        const options = this.props.options.map((child, i) => <div key={child.oid} className="option" onClick={this.onClick.bind(this, i)}>{child.name}</div>);

        return (
            <div className="dropdown-container" style={{ position: 'relative' }} >
                <div className="dropdown" ref="dropdown"  style={dropdownStyles} onClick={this.toggle.bind(this)} >
                    <div className="selected">{selectedOption}</div>
                    <div className={`toggle ${isShown ? 'expanded' : ''}`}><ChevronIcon /></div>
                </div>
                <div className="options" style={optionsStyles} >
                    {options}
                </div>
            </div>
        );
    }
}