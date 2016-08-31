import React from 'react';
import { Description } from './Description';
import { TestSection } from './Tests';
import { Footer } from './Footer';

export class WorkitemDetails extends React.Component {

    componentWillMount() {
        if (this.props.workitem.oid) {
            this.props.getWorkitemDetails(this.props.workitem.oid);
        }
    }

    componentWillReceiveProps(nextProps) {
        const wi = nextProps.workitem;
        if(this.props.workitem.oid !== nextProps.workitem.oid) {
            this.props.getWorkitemDetails(nextProps.workitem.oid);
        }
    }

    render() {
        const {
            oid,
            description,
            tests
        } = this.props.workitem;

        return (
            <div className="content">
                <div className="main">
                    <Description oid={oid} description={description} {...this.props} />
                    <TestSection tests={tests} {...this.props} />
                </div>
                <Footer {...this.props} />
            </div>
        )
    }
}