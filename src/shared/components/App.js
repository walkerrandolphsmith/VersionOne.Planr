import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Root extends React.Component {
    render() {
        return (
            <div>
                <div>
                    I am world
                </div>
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

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ },dispatch);
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Root);
