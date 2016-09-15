import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../state';
import { Landing } from './Landing';

export class _Story extends Landing {
    componentWillMount() {
        if(this.props.epic) {
            this.props.selectEpic(this.props.epic);
        }
    }
}

const mapStateToProps = (state) => ({
    epic: state.atom.epic,
    workitems: Selectors.getAllPrimaryWorkitems(state),
    selected: state.atom.selected
});
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Story = connect(mapStateToProps, mapActionsToProps)(_Story);