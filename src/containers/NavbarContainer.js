import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth: this.props.auth.data.isAuth
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth.data.isAuth !== this.props.auth.data.isAuth) {
            this.setState({ isAuth: this.props.auth.data.isAuth });
        }
    }

    render() {
        return (
            <Navbar isAuth={this.state.isAuth} />
        )
    }
}

export default connect(mapStateToProps)(NavbarContainer)
