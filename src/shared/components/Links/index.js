import React from 'react';
import { Link } from './Link';
import { NewLink } from './NewLink';

export class Links extends React.Component {
    componentWillMount() {
        if (this.props.oid) {
            this.props.getLinks(this.props.oid);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.oid !== nextProps.oid) {
            this.props.getLinks(nextProps.oid);
        }
    }

    render() {
        const links = this.props.links.map((link, i) => <Link key={i} {...link} />);

        return (
            <div className="content">
                <div className="main">
                    <NewLink {...this.props} />
                    {links}
                </div>
            </div>
        )
    }
}