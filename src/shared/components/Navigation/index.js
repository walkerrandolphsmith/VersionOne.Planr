import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarGroup, ToolbarTitle } from './../Toolbar';
import { Modal } from './../Modal';
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

class InfoModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isOpen: false };
    }

    toggleInfoMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const { versionNumber, versionOneInstance } = this.props;
        return (
            <span className="info" onClick={this.toggleInfoMenu}>
                <Modal isOpen={this.state.isOpen}>
                    <div className="info-modal">
                         <Toolbar className="info-actionbar">
                             <ToolbarTitle text={'Information'}/>
                        </Toolbar>
                        <div className="info-content">
                            <div>
                                <label>Version Number:</label>
                                <span className="version-number">{versionNumber}</span>
                            </div>
                            <div>
                                <label>VersionOne Instance:</label>
                                <span className="versionone-instance">{versionOneInstance}</span>
                            </div>
                        </div>
                    </div>
                </Modal>
            i</span>
        )
    }
}

export class _Navigation extends React.Component {
    render() {
        return (
            <header className="navigation">
                <Toolbar className="nav-toolbar">
                    <ToolbarGroup>
                        <span className="logo"><LogoIcon /></span>
                        <InfoModal {...this.props} />
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