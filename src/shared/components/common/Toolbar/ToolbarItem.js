import React from 'react';

class ToolbarItem extends React.Component {
    static defaultProps = {
        style: {}
    };

    render() {
        const {
            label,
            labelFor,
            className,
            style,
            labelStyle,
            children
        } = this.props;
        const containerStyle = Object.assign({}, ToolbarItem.defaultStyles.container, style);
        const toolbarItemLabelStyle =  Object.assign({}, ToolbarItem.defaultStyles.label, labelStyle);

        return (
            <div style={containerStyle} className={`toolbar-item item ${className}`} >
                <label for={labelFor}>
                    <span style={toolbarItemLabelStyle}>{label}:</span>
                </label> {children} <span className={`toolbar-divider ${className}`}></span>
            </div>
        );
    }

    static defaultStyles = {
        container: {
            display: 'flex',
            alignItems: 'center'
        }
    }
}

export default ToolbarItem;