import React from 'react';
import { MemberAvatar } from './../Avatar';

export class OwnersList extends React.Component {
    static defaultProps = {
        owners: []
    };

    render() {
        const owners = this.props.owners.map((owner, i) => <MemberAvatar key={owner.oid} url={owner.avatar} />);

        return (
            <div className="owners-list">
                {owners}
            </div>
        )
    }
}