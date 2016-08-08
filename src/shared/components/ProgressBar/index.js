import React from 'react';

export class ProgressBar extends React.Component {
    
    static defaultProps = {
        actual: 0,
        showGoal: false,
        goal: 0
    };
    
    render() {
        const {
            actual,
            showGoal,
            goal,
            label
        } = this.props;

        const labelContainer = label ? <span>{label}</span> : null;

        const progressStyle = {
            width: `${actual}%`
        };

        const goalStyle = {
            left: `${goal}px`,
            backgroundColor: showGoal ? 'red' : 'transparent'
        };

        return (
            <div className="progress-bar-container">
                {labelContainer}
                <div className="progress-bar">
                    <div className="progress" style={progressStyle}>

                    </div>
                </div>
                <div className="goal" style={goalStyle}>

                </div>
            </div>
        )
    }
}