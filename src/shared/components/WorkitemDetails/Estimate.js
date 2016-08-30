import React from 'react';
import { Input } from '../Inputs'

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
        const { estimate } = this.props.workitem;
        return (
            <div className="card summary estimate">
                <div className="value-label-pair">
                    <div className="value">
                        <Input
                            value={estimate}
                            updateValue={this.updateEstimate.bind(this)}
                        />
                    </div>
                    <div className="label">
                        Pts.
                    </div>
                </div>
            </div>
        )
    }
}