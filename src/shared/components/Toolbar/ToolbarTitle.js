import React from 'react';

export default class ToolbarTitle extends React.Component {
    render() {
        const { text, className } = this.props;

        return (
            <div className={`toolbar-title ${className}`}>
                <h1>{text}</h1>
                <span className={`toolbar-divider ${className}`} />
            </div>
        );
    }
}