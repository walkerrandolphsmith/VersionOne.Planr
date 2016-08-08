import React from 'react';

export class Estimate extends React.Component {

    static defaultProps = {
        estimate: 0
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            estimate: props.estimate
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            estimate: nextProps.estimate
        });
    }

    update(event) {
        const estimate = event.target.value;
        this.setState({ estimate: estimate });
        //this.props.updateWorkitem('name', newName);
    }

    render() {
        const {
            estimate
        } = this.state;

        return (
            <div className="card summary estimate">
                <div className="value-label-pair">
                    <div className="value">
                        {estimate}
                    </div>
                    <div className="label">
                        Pts.
                    </div>
                </div>
            </div>
        )
    }
}