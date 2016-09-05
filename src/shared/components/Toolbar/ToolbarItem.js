import React from 'react';

export default class ToolbarItem extends React.Component {
    render() {
        const {
            label,
            labelFor,
            className,
            children
        } = this.props;

        return (
            <div className={`toolbar-item item ${className}`} >
                <label for={labelFor}>
                    <span>{label}:</span>
                </label> {children} <span className={`toolbar-divider ${className}`} />
            </div>
        );
    }
}