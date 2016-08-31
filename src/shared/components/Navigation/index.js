import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './../Toolbar';
import { Lookup } from './../Lookup';
import { DetailsIcon } from './../Icons';

class EpicLookup extends React.Component {
    search(query) {
        this.props.lookupEpic(query);
    }

    select(result) {
        this.props.setEpic({ name: result.text, oid: result.oid, scope: result.scope });
    }

    deSelect() {
        this.props.unSetEpic();
    }

    render() {
        const { epicLookupResults, epic } = this.props;
        return (
            <Lookup {...this.props}
                selected={epic.name}
                deSelect={this.deSelect.bind(this)}
                placeholder="Epic:123"
                width={252}
                results={epicLookupResults}
                select={this.select.bind(this)}
                onChange={this.search.bind(this)}
                inputStyles={{
                    border: 'none'
                }}
                listStyles={{
                    position: 'absolute',
                    right: '0px',
                    zIndex: 99999,
                    backgroundColor: 'white'
                }}
            />
        );
    }
}

export class _Navigation extends React.Component {
    render() {
        const { epic } = this.props;
        return (
            <header className="navigation">
                <Toolbar className="nav-toolbar">
                    <ToolbarGroup>
                        <span className="logo"><DetailsIcon /></span>
                    </ToolbarGroup>
                    <ToolbarTitle text={'VersionOne.Planr'}/>
                    <ToolbarSpacer />
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
    return {
        epic: state.backlogStateAtom.epic,
        epicLookupResults: state.backlogStateAtom.epicLookupResults
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(_Navigation);