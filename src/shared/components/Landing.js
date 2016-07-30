import React from 'react';
export class Landing extends React.Component {
    render() {
        const wis = [].map(wi => {
            const tasks = wi.Tasks.map(task => <div key={task}>---------->{task}</div>);
            const tests = wi.Tests.map(test => <div key={test}>---------->{test}</div>);
            return <div key={wi.Number}>
                <span>{wi.Number} - {wi.Name}</span>
                <div>{tasks}</div>
                <div>{tests}</div>
            </div>
        });

        return (
            <div>
                {wis}
            </div>
        )
    }
}