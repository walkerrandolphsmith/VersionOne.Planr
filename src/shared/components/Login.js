import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../state';
import { Button } from './Buttons';

const ENTER = 13;
class LoginContainer extends React.Component {
    state = { token: '' };

    onKeyUp = (e) => {
        if(e.which === ENTER){
            this.save();
        } else {
            this.setState({ token: e.target.value });
        }
    };

    onClick = () => {
        this.save();
    };

    save = () => {
        this.props.setAuthToken(this.state.token);
    };

    render() {
        return (
            <div className="login-content-container">
                <div className="login-content">
                    <input name="authToken"
                           className="auth-token"
                           placeholder="Paste or type auth token"
                           onKeyUp={this.onKeyUp}
                    />
                    <Button text="Submit" onClick={this.save} />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export const Login = connect(() => ({}), mapDispatchToProps)(LoginContainer);