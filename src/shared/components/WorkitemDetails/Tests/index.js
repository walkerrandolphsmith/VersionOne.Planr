import React from 'react';
import { Actionbar } from './ActionBar';
import { TestList } from './TestList';
import { TestTemplate } from './TestTemplate';

export class TestSection extends React.Component {

    render() {
        const { tests } = this.props;
        return (
            <div className="test-section">
                <Actionbar {...this.props} />
                <TestTemplate {...this.props} />
                <TestList tests={tests} />
            </div>
        )
    }
}