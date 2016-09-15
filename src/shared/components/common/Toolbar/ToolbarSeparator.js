import React from 'react';

class ToolbarSeparator extends React.Component {
    static defaultProps = {
        style: {}
    };

    render() {
        const {
            className,
            style
        } = this.props;
        const separatorStyle = Object.assign({}, ToolbarSeparator.defaultStyles.container, style);
        return (
            <div className={`toolbar-separator ${className}`} style={separatorStyle}></div>
        );
    }

    static defaultStyles = {
        container: {
            display: 'inline-block',
            margin: '0 0.3rem',
            width: '1px',
            background: '#dde2e9'
        }
    };
}
export default ToolbarSeparator;