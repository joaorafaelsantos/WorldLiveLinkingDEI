import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "../components/SignIn/SignIn";
import {authFetchData, profileFetchData} from "../actions/auth";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(authFetchData(credentials)),
  fetchProfile: () => dispatch(profileFetchData())
});

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: this.props.auth.data.isAuth
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.data.isAuth !== this.props.auth.data.isAuth) {
      this.setState({ isAuth: this.props.auth.data.isAuth });
      if (this.props.auth.data.isAuth) {
        this.props.fetchProfile();
        this.props.history.push("/map");
      }
    }
  }

  handleClick(credentials) {
    this.props.signIn(credentials);
  }

  render() {
    return <SignIn onClick={this.handleClick} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
