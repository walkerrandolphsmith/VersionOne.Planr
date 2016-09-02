import React from 'react';
import { AutoGrowInput } from '../Inputs'

export class Estimate extends React.Component {
    updateEstimate(newValue){
        this.props.updateWorkitem({
            oid: this.props.oid,
            assetData: {
                estimate: newValue
            }
        });
    }

    render() {
        const { label } = this.props;
        const estimate = this.props.estimate;

        return (
            <div className="number-label-pair">
                <div className="value">
                    <AutoGrowInput
                        value={estimate}
                        updateValue={this.updateEstimate.bind(this)}
                    />
                </div>
                <div className="label">
                    {label}
                </div>
            </div>
        )
    }
}