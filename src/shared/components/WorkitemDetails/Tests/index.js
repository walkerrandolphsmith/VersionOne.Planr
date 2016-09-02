import React from 'react';
import { Actionbar } from './ActionBar';
import { TestList } from './TestList';
import { BddTemplate } from './BddTemplate';
import { SimpleTemplate } from './SimpleTemplate';

export class TestSection extends React.Component {
    getViewForTab() {
        const TemplateTypeMap = {
            0: <BddTemplate {...this.props} />,
            1: <SimpleTemplate {...this.props} />
        };
        return TemplateTypeMap[this.props['currentTestsTab']] || <SimpleTemplate {...this.props} />;
    }

    render() {
        const { tests, updateTest, deleteTest } = this.props;
        const template = this.getViewForTab();
        const testList = tests.length > 0
            ? <TestList updateTest={updateTest} deleteTest={deleteTest} tests={tests} />
            : <div className="empty-test-list">Add tests above</div>;
        return (
            <div className="test-section">
                <Actionbar {...this.props} />
                {template}
                {testList}
            </div>
        )
    }
}