import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarGroup } from './../Toolbar';
import { LogoIcon } from './../Icons';
import { EpicLookup } from './EpicLookup';
import { InfoPopover } from './InfoPopover';

export class _Navigation extends React.Component {
    render() {
        return (
            <header className="navigation">
                <Toolbar className="nav-toolbar">
                    <ToolbarGroup>
                        <span className="logo"><LogoIcon /></span>
                        <InfoPopover {...this.props} />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="epic-lookup">
                            <EpicLookup {...this.props} />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}

function mapStateToProps(state) {
    const { v1Protocol, v1Port, v1Host, v1Instance } = state.backlogStateAtom;
    const versionOneInstance = `${v1Protocol}://${v1Host}:${v1Port}/${v1Instance}`;
    return {
        versionOneInstance: versionOneInstance,
        versionNumber: state.backlogStateAtom.versionNumber,
        epic: state.backlogStateAtom.epic,
        epicLookupResults: state.backlogStateAtom.epicLookupResults
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(_Navigation);