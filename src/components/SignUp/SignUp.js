import React, {Component} from 'react';
import './SignUp.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import {Formik} from "formik";
import {SignUpForm} from "./SignUpForm";


const validationSchema = Yup.object({
    name: Yup.string("Enter your Name")
        .required("Email is required"),
    username: Yup.string("Enter your Username")
        .required("Username is required"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    pwd_confirmation: Yup.string("")
        .required("Enter your password")
        .oneOf([Yup.ref("password")], "Password does not match")
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            pwd_confirmation: ""
        }
    }

    render() {
        const { name, username, email, password, pwd_confirmation } = this.state;
        const values = {
            name: name,
            username: username,
            email: email,
            password: password,
            pwd_confirmation: pwd_confirmation
        };
        return (
            <Grid container justify="center">
                <Grid item xs={4}>
                    <Paper className="signup-box">
                        <Formik
                            render={props => <SignUpForm {...props}/>}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={this.props.onClick}
                        />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default SignUp;