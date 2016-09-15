import React from 'react';

export class LivePreviewLink extends React.Component {
    state = { isShown: false };

    onMouseEnter() {
        this.setState({ isShown: true });
    }

    onMouseLeave() {
        this.setState({ isShown: false });
    }


    render() {
        const { name, url } = this.props;
        const { isShown } = this.state;

        return (
            <div className="live-preview-link">
               <a onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{name}</a>
                <div className={`preview-container ${isShown ? 'shown' : ''}`}>
                    <div className="preview">
                        <iframe src={url} />
                    </div>
                </div>
            </div>
        )
    }
}