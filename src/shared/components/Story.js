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

    componentWillReceiveProps(nextProps) {
        const { selected } = this.props;
        const index = nextProps.workitems.findIndex(wi => wi.oid === selected);
        if(index > -1) {
            this.props.setCaret(index);
        }
    }
}

const mapStateToProps = (state) => ({
    epic: state.backlogStateAtom.epic,
    workitems: Selectors.getAllPrimaryWorkitems(state),
    selected: state.backlogStateAtom.selected,
    caretPosition: state.backlogStateAtom.caretPosition
});
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Story = connect(mapStateToProps, mapActionsToProps)(_Story);