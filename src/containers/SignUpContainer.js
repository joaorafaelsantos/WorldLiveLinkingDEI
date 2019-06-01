import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "../components/SignUp/SignUp";
import {profileFetchData, registerFetchData} from "../actions/auth";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const mapDispatchToProps = dispatch => ({
  register: registration => dispatch(registerFetchData(registration)),
  fetchProfile: () => dispatch(profileFetchData())
});


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: this.props.auth.data.isAuth
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {

    console.log(prevProps);
    if (prevProps.auth.data.isAuth !== this.props.auth.data.isAuth) {
      this.setState({ isAuth: this.props.auth.data.isAuth });
      if (this.props.auth.data.isAuth) {
        console.log("signed");
        this.props.fetchProfile();
        this.props.history.push("/map");
      }
    }
  }


  handleClick(registration) {
    this.props.register(registration)
  }

  render() {
    return <SignUp onClick={this.handleClick} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
