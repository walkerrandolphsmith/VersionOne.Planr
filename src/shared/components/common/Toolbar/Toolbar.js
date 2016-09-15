import React from 'react';

class Toolbar extends React.Component {
    static defaultProps = {
        style: {},
        titleStyle: {},
        itemStyle: {}
    };

    render() {
        const {
            children,
            className,
            style,
        } = this.props;
        const height = style.height
            ? style.height
            : '56px';

        const toolbarStyle = Object.assign({}, Toolbar.defaultStyles.container, style, {
            height
        });

        return (
            <div className={`toolbar ${className}`} style={toolbarStyle}>
                {React.Children.map(children, (child, index) => {
                    if (!child) {
                        return null;
                    }
                    const style = Object.assign({}, {height},child.props.style);
                    return React.cloneElement(child, {
                        key: index,
                        style
                    });
                })}
            </div>
        );
    }

    static defaultStyles = {
        container: {
            boxSizing: 'border-box',
            display: 'flex',
            minHeight: '56px',
            alignItems: 'center'
        }
    };
}

export default Toolbar;