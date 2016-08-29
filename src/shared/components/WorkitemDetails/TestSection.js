import React from 'react';
import { TestList } from './TestList';
import { TestTemplate } from './TestTemplate';

export class TestSection extends React.Component {

    render() {
        const { tests } = this.props;
        return (
            <div className="test-section">
                <TestTemplate {...this.props} />
                <TestList tests={tests} />
            </div>
        )
    }
}