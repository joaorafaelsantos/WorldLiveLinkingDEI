import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import { authFetchData } from "../actions/auth";
import { Formik } from "formik";
import * as Yup from "yup";


const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const validationSchema = Yup.object({
  name: Yup.string()
  .min(3, "Name must contain at least 3 characters")
  .max(15, "Name can have maximum 15 characters")
  .required("Name is required"),
  location: Yup.string("Enter your location")
  .max(14, "Location can have maximum 14 characters")
  .required("Location is required"),
  jobDescription: Yup.string("")
  .min(8, "Job description must contain at least 8 characters")
  .max(18, "Job description can have maximum 18 characters"),
  company: Yup.string("Enter your company name")
  .max(10, "Company can have maximum 10 characters"),
  degree: Yup.string("Enter your degree")
  .required("Degree is required")
});

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Done!')
  }

  render() {
    const values = { name: "", location: "", jobDescription: "", company: "",degree:""};
    return (
      <div>
        <Formik 
            render={props => <Profile {...props} onClick={this.handleClick} />}
            initialValues={values}
            validationSchema={validationSchema}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
)(ProfileContainer);
