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
        const { tests, updateWorkitem, deleteTest } = this.props;
        const template = this.getViewForTab();
        const testList = tests.length > 0
            ? <TestList updateWorkitem={updateWorkitem} deleteTest={deleteTest} tests={tests} />
            : <div className="empty-test-list">No tests have been added</div>;
        return (
            <div className="test-section">
                <Actionbar {...this.props} />
                {template}
                {testList}
            </div>
        )
    }
}