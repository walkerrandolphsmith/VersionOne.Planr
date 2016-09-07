import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../state';
import { Landing } from './Landing';

export class _Story extends Landing {
    componentWillMount() {
        if(this.props.epic) {
            this.props.setEpic(this.props.epic);
        }
    }
}

const mapStateToProps = (state) => ({
    epic: state.backlogStateAtom.epic,
    workitems: Selectors.getAllPrimaryWorkitems(state),
    selected: state.backlogStateAtom.selected
});
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Story = connect(mapStateToProps, mapActionsToProps)(_Story);