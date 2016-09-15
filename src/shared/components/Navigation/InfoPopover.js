import React, { Component, PropTypes } from 'react';
import { HoverPopover } from './../common/Popover';
import { Button } from './../common/Buttons';

export class InfoPopover extends Component {
    sendFeeback = () => {
        window.open('https://github.com/walkerrandolphsmith/VersionOne.Planr/issues');
    };

    render() {
        const { versionNumber, versionOneInstance } = this.props;
        const target = <span className="info-button"><div className="info">i</div></span>;
        return (
            <HoverPopover className="hover-popover info-popover" target={target}>
                <div className="info-content">
                    <div>
                        <label>Version Number:</label>
                        <span className="version-number">{versionNumber}</span>
                    </div>
                    <div>
                        <label>VersionOne Instance:</label>
                        <span className="versionone-instance">
                            <a href={versionOneInstance} target="_blank">{versionOneInstance}</a>
                        </span>
                    </div>
                    <div className="send-feedback">
                        <Button text="Send Feedback" onClick={this.sendFeeback} />
                    </div>
                </div>
            </HoverPopover>
        )
    }
}
