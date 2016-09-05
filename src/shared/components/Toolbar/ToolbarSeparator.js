import React from 'react';

export default class ToolbarSeparator extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`toolbar-separator ${className}`} />
        );
    }
}