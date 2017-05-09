import React from 'react';
import * as actions from './Login.actions';
import * as ReactRedux from 'react-redux';
import { Link, IndexLink } from 'react-router';

class Login extends React.Component {

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <h3 className="welcome">Thanks for logging in!</h3> :
                    <div className="form">
                        <h3 className="welcome">Welcome! Please Login.</h3>
                        <div className="form-details">
                            Email: <input onChange={(event) => this.props.emailTyping(event)} type="text" />
                            Password: <input onChange={(event) => this.props.passwordTyping(event)} type="password" />
                            <button className="btn btn-info" onClick={()=> this.props.loginButton(this.props.email, this.props.password)}>Login</button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const LoginContainer = ReactRedux.connect(
    state => state.login,
    actions
)(Login);

export default LoginContainer;
LoginContainer
