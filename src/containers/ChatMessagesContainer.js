import React, { Component } from 'react';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import MessageList from '../components/ChatMessages/MessageList';
import { connect } from 'react-redux';
import firebase from './FireBaseConfig';
import '../components/ChatMessages/MessageList.css';

const mapStateToProps = ({ chat }) => {
  return {
    chat
  }
};
class ChatMessagesContainer extends Component {

  render() {

    if (this.props.chat.data !== "0") {


      return (

        <div class="scrollable content">

          <div className="message-list">
          <div className="message-list-container">
            <MessageList db={firebase} />
            <ChatMessages db={firebase} />
          </div>
        </div>
        </div>
      );
   } else {
      return (
        <div class="scrollable content">
          <div style={{position:'absolute',top:'20%',left:'50%'}}><p>Choose a user to chat...</p></div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(ChatMessagesContainer);
