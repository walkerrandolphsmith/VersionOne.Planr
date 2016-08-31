import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../state';

class LoginContainer extends React.Component {

    constructor(props, context){
        super(props, context);
        if(localStorage.getItem('authToken')){
            props.setAuthToken(localStorage.getItem('authToken'));
        }
    }

    onKeyDown(e){
        const ENTER = 13;
        if(e.which === ENTER){
            this.props.setAuthToken(e.target.value);
        }
    }

    render() {
        return (
            <div className="login-content-container">
                <div className="login-content">
                    <input name="authToken" className="auth-token" placeholder="Paste or type auth token" onKeyDown={this.onKeyDown.bind(this)} />
                    <div>(press enter to login)</div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Login = connect(() => ({}), mapDispatchToProps)(LoginContainer);