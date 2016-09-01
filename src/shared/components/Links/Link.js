import React from 'react';

export class Link extends React.Component {

    render() {
        const { name, url } = this.props;

        return (
            <div className="link">
                <a href={url}>{name}</a>
            </div>
        )
    }
}