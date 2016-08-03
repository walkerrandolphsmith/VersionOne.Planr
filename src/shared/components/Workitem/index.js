import React from 'react';
import { WorkitemDetails } from './../WorkitemDetails';
import { ConversationStream } from './../ConversationStream';
import { ActivityStream } from './../ActivityStream';
import { CommitStream } from './../CommitStream';

export class Workitem extends React.Component {
    render() {
        const { tab } = this.props;
        let tabView = <div></div>;
        switch(tab) {
            case 0: tabView = <WorkitemDetails {...this.props} />; break;
            case 1: tabView = <ConversationStream {...this.props} />; break;
            case 2: tabView = <ActivityStream {...this.props} />; break;
            case 3: tabView = <CommitStream {...this.props} />; break;
        }
        return tabView;
    }
}