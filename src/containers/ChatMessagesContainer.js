import React, { Component } from 'react';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import MessageList from '../components/ChatMessages/MessageList';

import firebase from './FireBaseConfig';


class ChatMessagesContainer extends Component {
      
        render() {
          return (
                <div>
                    <div className="column is-6">
                      <MessageList db={firebase} />
                      <ChatMessages db={firebase} />
                    </div>
              </div>
          );
        }
}

export default ChatMessagesContainer;
