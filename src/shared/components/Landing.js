import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../state';
import { Backlog } from './Backlog';
import { BackgroundIcon } from './Icons'

export class _Landing extends React.Component {
    render() {
        return this.props.epic
            ? (<Backlog {...this.props} />)
            : (<div className="select-epic-message">
                <div><BackgroundIcon /></div>
                <div>
                    <span className="message">To begin planning search for an Epic</span>
                    <span className="sub-message">using the search in the top right</span>
                </div>
               </div>);
    }
}

const mapStateToProps = (state) => ({ epic: state.backlogStateAtom.epic });
const mapActionsToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
export const Landing = connect(mapStateToProps, mapActionsToProps)(_Landing);