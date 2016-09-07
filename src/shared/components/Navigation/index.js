import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarGroup } from './../Toolbar';
import { Lookup } from './../Lookup';
import { LogoIcon } from './../Icons';

class EpicLookup extends React.Component {
    search = (query) => {
        this.props.lookupEpic(query);
    };

    select = (result) => {
        this.props.setEpic({
            name: result.text, oid: result.oid, scope: result.scope, category: result.category
        });
    };

    deSelect = () => {
        this.props.unSetEpic();
    };

    render() {
        const { epicLookupResults, epic } = this.props;
        const className = epic && epic.category ? epic.category.name : '';
        return (
            <Lookup {...this.props}
                classNames={className}
                resultClassNameField={"category.name"}
                selected={epic.name}
                deSelect={this.deSelect}
                placeholder="Search for an Epic"
                width={252}
                results={epicLookupResults}
                select={this.select}
                onChange={this.search}
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
        const { epic, packageNumber } = this.props;
        return (
            <header className="navigation">
                <Toolbar className="nav-toolbar">
                    <ToolbarGroup>
                        <span className="logo"><LogoIcon /></span>
                        <span className="version-number">{packageNumber}</span>
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
    return {
        packageNumber: state.backlogStateAtom.packageNumber,
        epic: state.backlogStateAtom.epic,
        epicLookupResults: state.backlogStateAtom.epicLookupResults
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(_Navigation);