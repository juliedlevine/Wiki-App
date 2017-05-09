import React from 'react';
import * as actions from './Login.actions';
import * as ReactRedux from 'react-redux';
import { Link, IndexLink } from 'react-router';

class SignUp extends React.Component {

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <h3>You've created an account!</h3> :

                    <div className="form">
                        <h3 className="welcome">Welcome! Please create an account.</h3>
                        <div className="form-details">
                            Email: <input onChange={(event) => this.props.emailTyping(event)} type="text" />
                            Password: <input onChange={(event) => this.props.passwordTyping(event)} type="password" />
                            <button className="btn btn-info" onClick={()=> this.props.createAccount(this.props.email, this.props.password)}>Create Account</button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const SignUpContainer = ReactRedux.connect(
    state => state.login,
    actions
)(SignUp);

export default SignUpContainer;
