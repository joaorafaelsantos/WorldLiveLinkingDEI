import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import { authFetchData } from "../actions/auth";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push("/submitSignin");
  }

  render() {
    return <SignUp onClick={this.handleClick} />;
  }
}

export default connect(
  mapStateToProps,
)(SignUpContainer);
