import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppLayout = ({ children }) =>
    <div>

        <div className="nav-container">
            <ul className="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/login" activeClassName="active">Log In</Link></li>
                <li><Link to="/signup" activeClassName="active">Create Account</Link></li>
            </ul>
        </div>

        <div className="main">
            {children}
        </div>

    </div>;


export default AppLayout;
