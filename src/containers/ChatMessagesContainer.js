import React, { Component } from 'react';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import MessageList from '../components/ChatMessages/MessageList';
import { connect } from 'react-redux';
import firebase from './FireBaseConfig';

const mapStateToProps = ({ chat }) => {
  return {
    chat
  }
};
class ChatMessagesContainer extends Component {

  render() {

    if (this.props.chat.data != "0") {


      return (

        <div>
          <div className="column is-6">
            <MessageList db={firebase} />
            <ChatMessages db={firebase} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="column is-6"><p>Choose a user to chat...</p></div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(ChatMessagesContainer);
