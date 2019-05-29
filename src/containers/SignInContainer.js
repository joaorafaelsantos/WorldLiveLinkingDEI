import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import { authFetchData } from "../actions/auth";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(authFetchData(credentials))
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
      if (this.props.auth.data.isAuth) this.props.history.push("/map");
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
