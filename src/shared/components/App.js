import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, ToolbarSpacer, ToolbarSeparator } from './Toolbar';

export class App extends React.Component {
    render() {
        return (
            <div>
                <header className="navigation">
                    <Toolbar>
                        <ToolbarTitle text={'VersionOne.Planr'}/>
                        <ToolbarSpacer />
                        <ToolbarGroup>
                            <div className="access-token">
                                <input type="text" placeholder="Access Token" />
                            </div>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <div className="epic-lookup">
                                <input type="text" placeholder="Epic:1234" />
                            </div>
                        </ToolbarGroup>
                    </Toolbar>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
