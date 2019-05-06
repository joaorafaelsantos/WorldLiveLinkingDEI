import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import { authFetchData } from "../actions/auth";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};


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
    return <Profile onClick={this.handleClick} />;
  }
}
export default connect(
  mapStateToProps,
)(ProfileContainer);
