import React from 'react';

export default class ToolbarGroup extends React.Component {
    static defaultProps = {
        attachToRight: false
    };

    render() {
        const { children, className } = this.props;

        return (
            <div className={`toolbar-group ${className}`}>
                {React.Children.map(children, (child, index) => {
                   return child ? React.cloneElement(child, { key: index }) : null;
                })}
            </div>
        );
    }
}