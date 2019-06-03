import React, {Component} from 'react';
import {connect} from 'react-redux'
import Messenger from "../components/Messenger/Messenger";


class ChatContainer2 extends Component {

    render() {
        return (
            <div>
                <Messenger />
            </div>
        )
    }
}

export default connect()(ChatContainer2)