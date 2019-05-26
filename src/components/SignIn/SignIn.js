import React, {Component} from 'react';
import './SignIn.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Formik} from "formik";
import {SignInForm} from "./SignInForm";
import * as Yup from "yup";


const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .max(32, "Password cannot contain more than 32 characters")
        .required("Enter your password")
});


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }


    render() {
        const { email, password } = this.state;
        const values = {
            email: email,
            password: password
        };
        return (<div>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <Paper className="signin-box">
                        <Formik
                            render={props => <SignInForm {...props}/>}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={this.props.onClick}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>);
    }
}
