import React from 'react';
import { bindActionCreators } from 'redux';
import { Navigation } from './Navigation';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../state';

class AppContainer extends React.Component {
    constructor(props, context){
        super(props, context);
        if(localStorage.getItem('authToken')){
            props.setAuthToken(localStorage.getItem('authToken'));
        }
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


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const App = connect(() => ({}), mapDispatchToProps)(AppContainer);