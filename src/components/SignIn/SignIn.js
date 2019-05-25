import React from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignIn = ({ onClick }) => (
    <div className="signin-form">
        <div className="form">
            <div className="menu">
            <ul>
                <li><TextField
                    required
                    id="standard-email-input"
                    label="Email address"
                    className="email-field"
                    margin="normal"
                /></li>
                <li><TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    className="password-field"
                    autoComplete="current-password"
                    margin="normal"
                /></li>
            </ul>
            </div>
            <div className="button">
                <Button variant="contained" className="signin-button" onClick={onClick}>
                    Sign in
                </Button>
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
