import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chat from '../components/Chat/Chat';



const mapStateToProps = ({ alumni, auth }) => {
    return {
        alumni,
        auth
    }
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alumniData: this.props.alumni.data,
        }
    }

    componentWillMount() {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        }
    }

    render() {
       
        return (

            <Chat alumni={this.state.alumniData}/>


        )
    }
}

export default connect(mapStateToProps)(ChatContainer)