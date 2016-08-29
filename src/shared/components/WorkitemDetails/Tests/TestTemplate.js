import React from 'react'
import { BddTemplate } from './BddTemplate';
import { SimpleTemplate } from './SimpleTemplate';

export class TestTemplate extends React.Component {
    getViewForTab() {
        const TempalteTypeMap = {
            0: <BddTemplate {...this.props} />,
            1: <SimpleTemplate {...this.props} />
        };
        return TempalteTypeMap[this.props['currentTestsTab']] || <SimpleTemplate {...this.props} />;
    }

    render() {
        const template = this.getViewForTab();

        return (
            <div className="test-template">
                {template}
            </div>
        )
    }
}