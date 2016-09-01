import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators, Selectors } from './../state';
import { Button } from './Buttons';

class LoginContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { token: '' }
    }

    onKeyUp(e){
        const ENTER = 13;
        if(e.which === ENTER){
            this.save();
        } else {
            this.setState({ token: e.target.value });
        }
    }

    onClick() {
        this.save();
    }

    save() {
        this.props.setAuthToken(this.state.token);
    }

    render() {
        return (
            <div className="login-content-container">
                <div className="login-content">
                    <input name="authToken"
                           className="auth-token"
                           placeholder="Paste or type auth token"
                           onKeyUp={this.onKeyUp.bind(this)}
                    />
                    <Button text="Submit" onClick={this.save.bind(this)}/>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Login = connect(() => ({}), mapDispatchToProps)(LoginContainer);