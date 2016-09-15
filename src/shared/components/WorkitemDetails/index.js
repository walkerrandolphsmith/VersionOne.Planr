import React from 'react';
import { Description } from './Description';
import { TestSection } from './../Tests';
import { Footer } from './Footer';

export class WorkitemDetails extends React.Component {
    componentWillMount() {
        if (this.props.oid) {
            this.props.getWorkitemDetails(this.props.oid);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.oid !== nextProps.oid) {
            this.props.getWorkitemDetails(nextProps.oid);
        }
    }

    render() {
        const {
            oid,
            description,
            tests
        } = this.props;

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