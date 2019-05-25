import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chat from '../components/Chat/Chat';

const mapStateToProps = ({ alumni }) => {
    return {
        alumni
    }
}

class ChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alumniData: this.props.alumni.data,
        }
    }

    render() {
        return (
            <Chat alumni={this.state.alumniData} />
        )
    }
}

export default connect(mapStateToProps)(ChatContainer)