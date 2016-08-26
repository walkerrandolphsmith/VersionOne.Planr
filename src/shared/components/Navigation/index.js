import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../state';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer } from './../Toolbar';

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

    setEpic(event) {
        const epicOidToken = event.target.value;
        this.props.setEpic(epicOidToken);
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
                            {epic}
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="access-token">
                            <input type="text" placeholder="Access Token" />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div className="epic-lookup">
                            <input
                                type="text"
                                ref="epic"
                                placeholder="Epic:1234"
                                value={epic}
                                onChange={this.setEpic.bind(this)}
                            />
                        </div>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state.backlogStateAtom.epic);
    return {
        epic: state.backlogStateAtom.epic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(_Navigation);

