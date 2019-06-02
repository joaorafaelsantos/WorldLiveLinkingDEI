import React, {Component} from 'react';
import './SignIn.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Formik} from "formik";
import {SignInForm} from "./SignInForm";
import * as Yup from "yup";


const validationSchema = Yup.object({
    username: Yup.string("Enter your username")
        .required("Enter your username"),
    password: Yup.string("Enter your password")
        .required("Enter your password")
});


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "jorge",
            password: "123456"
        };
    }


    render() {
        const { username, password } = this.state;
        const values = {
            username: username,
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
