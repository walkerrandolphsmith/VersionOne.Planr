import React from 'react';
import { Dropdown } from './../Dropdown';

export class Status extends React.Component {

    onClick(i) {
        const relatedAsset = this.props.workitem.statuses[i];
        this.props.setStatus(relatedAsset);
    }

    render() {
        const {
            status,
            statuses
        } = this.props.workitem;

        return (
            <div className="status">
                <label>Status:</label>
                <div className="value">
                    <Dropdown selectedOption={status.name}
                              options={statuses}
                              onClick={this.onClick.bind(this)}
                    />
                </div>
            </div>
        )
    }
}