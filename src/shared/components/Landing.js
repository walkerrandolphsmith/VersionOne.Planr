import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../state';
import { Backlog } from './Backlog';
import { DetailsIcon } from './Icons'

export class _Landing extends React.Component {
    render() {
        return this.props.epic
            ? (<Backlog {...this.props} />)
            : (<div className="select-epic-message"><span><DetailsIcon /></span><span className="message">Select epic</span></div>);
    }
}

const mapStateToProps = (state) => ({ epic: state.backlogStateAtom.epic });
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Landing = connect(mapStateToProps, mapActionsToProps)(_Landing);