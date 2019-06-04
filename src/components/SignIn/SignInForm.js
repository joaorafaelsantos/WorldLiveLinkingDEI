import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './SignIn.css';
import Grid from "@material-ui/core/Grid";


export const SignInForm = props => {
    const {
        values: {username, password},
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false)
    };

    return (
        <div>
            <Avatar style={{marginLeft:'44%',background:'#EF4D56',marginBottom:'10px'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{marginBottom:'8px'}}>
                Sign in
            </Typography>
            <form
                onSubmit={handleSubmit}
            >

                <p style={{color: "red"}} hidden={!props.error}>
                    The username and password that you entered don't match.
                </p>

                <TextField
                    required
                    name="username"
                    id="standard-username-input"
                    helperText={touched.username ? errors.username: ""}
                    error={touched.username && Boolean(errors.username)}
                    label="Username"
                    value={username}
                    onChange={change.bind(null, "username")}
                    margin="normal"
                    variant="outlined"
                    autoFocus
                    autoComplete="email"
                    fullWidth
                />
                <TextField
                    required
                    name="password"
                    id="standard-password-input"
                    label="Password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    type="password"
                    value={password}
                    onChange={change.bind(null, "password")}
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <div className="button">
                    <button
                        variant="contained"
                        className="signin-button"
                        type="submit">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
};