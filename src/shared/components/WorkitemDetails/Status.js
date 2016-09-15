import React from 'react';
import { Dropdown } from './../common/Dropdown';

export class Status extends React.Component {
    onClick = (i) => {
        const relatedAsset = this.props.statuses[i];
        this.props.setStatus(relatedAsset);
    };

    render() {
        const { status, statuses } = this.props;

        return (
            <div className="status">
                <label>Status</label>
                <div className="value">
                    <Dropdown selectedOption={status.name}
                              options={statuses}
                              onClick={this.onClick}
                    />
                </div>
            </div>
        )
    }
}