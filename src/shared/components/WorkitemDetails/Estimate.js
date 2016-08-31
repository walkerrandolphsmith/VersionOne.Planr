import React from 'react';
import { AutoGrowInput } from '../Inputs'

export class Estimate extends React.Component {

    static defaultProps = {
        estimate: 0
    };

    updateEstimate(newValue){
        this.props.updateWorkitem({
            oid: this.props.workitem.oid,
            assetData: {
                estimate: newValue
            }
        });
    }

    render() {
        const { label } = this.props;
        const { estimate } = this.props.workitem;
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