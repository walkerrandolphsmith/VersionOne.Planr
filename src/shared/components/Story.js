import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../state';
import { Landing } from './Landing';

export class _Story extends Landing {
    componentWillMount() {
        if(this.props.epic) {
            this.props.setEpic(this.props.epic);
        }
    }
}

const mapStateToProps = (state) => ({ epic: state.backlogStateAtom.epic });
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Story = connect(mapStateToProps, mapActionsToProps)(_Story);