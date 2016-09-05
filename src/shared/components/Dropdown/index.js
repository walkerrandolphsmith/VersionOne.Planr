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
        selectedOption: 'None'
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isShown: false }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isShown: nextProps.isOpen });
    }

    onClick(i) {
        this.props.onClick(i);
        this.setState({ isShown: false });
    }

    toggle = (event) => {
        this.setState({ isShown: !this.state.isShown });
    };

    render() {
        const { isShown } = this.state;
        const { selectedOption } = this.props;

        const options = this.props.options.map((child, i) => (
            <div key={child.oid} className="option" onClick={this.onClick.bind(this, i)}>
                <div>{child.name}</div>
            </div>
        ));

        return (
            <div className={`dropdown-container ${isShown ? 'expanded' : ''}`}>
                <div className="dropdown" onClick={this.toggle} >
                    <div className="selected">
                        <div>{selectedOption}</div>
                    </div>
                    <div className="toggle"><ChevronIcon /></div>
                </div>
                <div className="options">
                    {options}
                </div>
            </div>
        );
    }
}