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
                <div className="application-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);