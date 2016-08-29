import React from 'react';

export class TestList extends React.Component {

    render() {
        const {
            tests
            } = this.props;

        const testMarkup = tests.map(test => (
                <div key={test.oid}>
                    <div>{test.number} - {test.name}</div>
                </div>
            ));

        return (
            <div>
                <h2>Test</h2>
                <div>{testMarkup}</div>
            </div>
        )
    }
}