import React from 'react';
import { Link, IndexLink } from 'react-router';
import * as ReactRedux from 'react-redux';
import * as actions from './login/Login.actions';

class AppLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="nav-container">
                    <ul className="nav">
                        {this.props.loggedIn?
                            <li className="user">Hi, {this.props.username}</li> :
                            <li></li>
                        }

                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/login" activeClassName="active">Log In</Link></li>
                        <li><Link to="/signup" activeClassName="active">Create Account</Link></li>
                    </ul>
                </div>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


const AppLayoutContainer = ReactRedux.connect(
    state => state.login,
    actions
)(AppLayout);

export default AppLayoutContainer;
