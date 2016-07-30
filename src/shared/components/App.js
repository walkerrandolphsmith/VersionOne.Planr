import React from 'react';

export class App extends React.Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}
