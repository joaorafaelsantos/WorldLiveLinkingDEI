import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';
import { resetAuthData} from "../actions/auth";

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
};


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(resetAuthData())
});

class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: this.props.auth.data.isAuth
        };

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth.data.isAuth !== this.props.auth.data.isAuth) {
            this.setState({ isAuth: this.props.auth.data.isAuth });
        }
    }

    handleLogout() {
        this.props.logout();
    }

    render() {
        const { name } = this.props.auth.data.profile;
        return (
            <Navbar isAuth={this.state.isAuth} handleLogout={this.handleLogout} profileName={name} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
