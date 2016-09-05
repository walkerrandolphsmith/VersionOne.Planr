import React from 'react';
import { bindActionCreators } from 'redux';
import { Navigation } from './Navigation';
import { connect } from 'react-redux';
import { ActionCreators } from './../state';

class AppContainer extends React.Component {
    constructor(props, context){
        super(props, context);
        props.setAuthToken();
    }
    
    render() {
        return (
            <div>
                <Navigation />
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

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);