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
            goal
        } = this.props;

        const progressStyle = {
            width: `${actual}%`
        };

        const goalStyle = {
            left: `${goal}px`,
            display: showGoal ? 'block' : 'none'
        };

        return (
            <div className="progress-bar-container">
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