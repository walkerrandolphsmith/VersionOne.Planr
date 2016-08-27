import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './../Toolbar';
import { Lookup } from './../Lookup';

class EpicLookup extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            results: props.epicLookupResults || []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ results: nextProps.epicLookupResults });
    }

    search(query) {
        this.props.lookupEpic(query);
    }

    select(result) {
        this.props.setEpic({ name: result.text, oid: result.oid });
    }

    render() {
        return (
            <Lookup {...this.props}
                placeholder="Epic:123"
                width={400}
                results={this.state.results}
                select={this.select.bind(this)}
                onChange={this.search.bind(this)}
                inputStyles={{
                    border: 'none'
                }}
                listStyles={{
                    position: 'absolute',
                    right: '30px',
                    zIndex: 99999,
                    backgroundColor: 'white'
                }}
            />
        )
    }
}

export class _Navigation extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            epic: this.props.epic
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ epic: nextProps.epic });
    }

    render() {
        const { epic } = this.state;
        return (
            <header className="navigation">
                <Toolbar>
                    <ToolbarTitle text={'VersionOne.Planr'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <div className="epic-lineage">
                            {epic.name}
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="epic-lookup">
                            <EpicLookup {...this.props} />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="epic-lookup">

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