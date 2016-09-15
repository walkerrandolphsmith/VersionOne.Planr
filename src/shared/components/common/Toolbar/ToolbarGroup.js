import React from 'react';

class ToolbarGroup extends React.Component {
    static defaultProps = {
        style: {},
        attachToRight: false
    };

    render() {
        const {
            children,
            className,
            style
        } = this.props;
        const toolbarGroupStyle = Object.assign({}, ToolbarGroup.defaultStyles.container, style);

        return (
            <div className={`toolbar-group ${className}`} style={toolbarGroupStyle}>
                {React.Children.map(children, (child, index) => {
                    if (!child) {
                        return null;
                    }
                    let childStyle;
                    if (child.type && child.type.name === 'ToolbarSeparator') {
                        childStyle = Object.assign({}, {height: style.height}, child.props.style, {display: 'flex'});
                    } else {
                        childStyle = Object.assign({}, child.props.style, {display: 'flex'});
                    }
                    return React.cloneElement(child, {
                        key: index,
                        style: childStyle
                    })
                })}
            </div>
        );
    }

    static defaultStyles = {
        container: {
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center'
        }
    };
}

export default ToolbarGroup;