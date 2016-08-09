import React from 'react';
import { MemberAvatar } from './Avatar';

export class OwnersPanel extends React.Component {

    static defaultProps = {
        owners: []
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isHovered: false
        }
    }

    onHover(isHovered) {
        this.setState({isHovered: isHovered});
    }


    render() {
        const {
            owners
        } = this.props;

        const styles = {
            display: 'inline-block',
            position: 'relative',
            width: '180px',
            verticalAlign: 'top'
        };

        const leftShift = this.state.isHovered ? 36 : 20;

        const ownersList = owners.map((owner, i) => (
            <div key={owner.oid} className="progress-section" style={{position: 'absolute', left: `${i * leftShift}px`, zIndex: i, top: '25%'}}>
                <MemberAvatar url={owner.avatar} />
            </div>
        ));

        return (
            <div className="owners-panel" style={styles}
                 onMouseEnter={this.onHover.bind(this, true)}
                 onMouseLeave={this.onHover.bind(this, false)}>
                {ownersList}
            </div>
        )
    }
}