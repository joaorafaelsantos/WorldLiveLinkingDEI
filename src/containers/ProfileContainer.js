import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "../components/Profile/Profile";
import { updateProfile } from "../actions/auth";
import {Formik} from "formik";
import * as Yup from "yup";

const mapDispatchToProps = dispatch => ({
    updateProfile: (profile) => dispatch(updateProfile(profile))
});

const mapStateToProps = ({auth}) => {
    return {
        auth
    };
};

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),
    location: Yup.string("Enter your location")
        .required("Location is required"),
    jobDescription: Yup.string(""),
    company: Yup.string("Enter your company name"),
    degree: Yup.string("Enter your degree")
        .required("Degree is required")
});

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges(profile) {
        this.props.updateProfile({...profile, username: this.props.auth.data.profile.username})
    }

    componentWillMount() {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        }
    }

    render() {
        const values = {
            name: this.props.auth.data.profile.name,
            location: this.props.auth.data.profile.location.city,
            jobDescription: this.props.auth.data.profile.company.job,
            company: this.props.auth.data.profile.company.name,
            degree: this.props.auth.data.profile.course.name
        };

        return (
            <div>
                <Formik
                    render={props => <Profile {...props}/>}
                    onSubmit={this.saveChanges}
                    initialValues={values}
                    validationSchema={validationSchema}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);
