import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const SignInForm = props => {
    const {
        values: {email, password},
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
        <form
            onSubmit={handleSubmit}
        >
            <TextField
                required
                name="email"
                id="standard-email-input"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                label="E-mail address"
                value={email}
                onChange={change.bind(null, "email")}
                margin="normal"
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
            />
            <div className="button">
                <Button
                    variant="contained"
                    className="signin-button"
                    type="submit">
                    Sign in
                </Button>
            </div>
        </form>
    );
};