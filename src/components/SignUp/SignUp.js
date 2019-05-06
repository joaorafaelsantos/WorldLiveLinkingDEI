import React from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

const SignUp = ({ onClick }) => (
    <div className="signup-form">
        <div className="form">
            <div className="menu">
            <h2>Account creation</h2>
            <ul>
                <li><h5 className="login_text">Username</h5></li>
                <li><input type="text"></input></li>    
                <li><h5 className="login_text">Password</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="password_text">Confirm Password</h5></li>
                <li><input type="password"></input></li>
            </ul>    
            </div>
            <div className="button">
                <a className="login-button" onClick={onClick}>Create Account</a>
                <p className="info-text">This will simulate a sign up event.</p>
            </div>
        </div>   
    </div>
);

SignUp.propTypes = {
    onClick: PropTypes.func.isRequired,
}

SignUp.defaultProps = {
    onClick: () => alert('Sign Up clicked!')
}

export default SignUp;