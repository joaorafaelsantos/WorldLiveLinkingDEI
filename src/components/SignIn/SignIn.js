import React from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';

const SignIn = ({ onClick }) => (
    <div className="signin-form">
        <div className="form">
            <div className="menu">
            <ul>
                <li><h5 className="login_text">Login</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="password_text">Password</h5></li>
                <li><input type="password"></input></li>
            </ul>    
            </div>
            <div className="button">
                <a className="login-button" onClick={onClick}>Sign In</a>
                <p className="info-text">This will simulate a sign in event.</p>
            </div>
        </div>   
    </div>
);

SignIn.propTypes = {
    onClick: PropTypes.func.isRequired,
}

SignIn.defaultProps = {
    onClick: () => alert('Sign in clicked!')
}

export default SignIn;
