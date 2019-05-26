import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const SignUpForm = props => {
    const {
        values: {name, email, password, pwd_confirmation},
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
                name="name"
                id="signup-name-input"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="Name"
                value={name}
                onChange={change.bind(null, "name")}
                margin="normal"
                fullWidth
            />
            <TextField
                required
                name="email"
                id="signup-email-input"
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
                id="signup-password-input"
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
            <TextField
                required
                name="pwd_confirmation"
                id="signup-pwd-confirmation-input"
                label="Cponfirm password"
                helperText={touched.pwd_confirmation ? errors.pwd_confirmation: ""}
                error={touched.pwd_confirmation && Boolean(errors.pwd_confirmation)}
                type="password"
                value={pwd_confirmation}
                onChange={change.bind(null, "pwd_confirmation")}
                margin="normal"
                fullWidth
            />
            <div className="button">
                <Button
                    variant="contained"
                    className="signup-button"
                    type="submit">
                    Sign in
                </Button>
            </div>
        </form>
    );
};