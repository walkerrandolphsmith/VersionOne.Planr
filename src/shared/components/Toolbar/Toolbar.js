import React from 'react';

export default class Toolbar extends React.Component {
    render() {
        const { children, className } = this.props;

        return (
            <div className={`toolbar ${className}`}>
                {React.Children.map(children, (child, index) => {
                    return child ? React.cloneElement(child, { key: index }) : null;
                })}
            </div>
        );
    }
}