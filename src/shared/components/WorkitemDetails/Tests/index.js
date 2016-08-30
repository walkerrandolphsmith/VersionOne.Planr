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
        const { tests, updateWorkitem } = this.props;
        const template = this.getViewForTab();
        return (
            <div className="test-section">
                <Actionbar {...this.props} />
                {template}
                <TestList updateWorkitem={updateWorkitem} tests={tests} />
            </div>
        )
    }
}