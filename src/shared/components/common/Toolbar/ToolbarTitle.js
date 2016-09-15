import React from 'react';

class ToolbarTitle extends React.Component {
    static defaultProps = {
        style: {}
    };

    render() {
        const {
            text,
            className,
            style
        } = this.props;
        const containerStyle = Object.assign({}, ToolbarTitle.defaultStyles.container, style);
        const titleStyle = Object.assign({}, ToolbarTitle.defaultStyles.title);

        return (
            <div style={containerStyle} className={`toolbar-title ${className}`} >
                <h1 style={titleStyle}>{text}</h1>
                <span className={`toolbar-divider ${className}`}></span>
            </div>
        );
    }

    static defaultStyles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        title: {
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: '500px',
            maxHeight: '50%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    }
}

export default ToolbarTitle;
