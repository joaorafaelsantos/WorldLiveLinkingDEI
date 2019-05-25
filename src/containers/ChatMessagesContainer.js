import React, { Component } from 'react';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

import firebase from './FireBaseConfig';


class ChatMessagesContainer extends Component {
    constructor(props){
        super(props);

 
       
      }
      
        render() {
          return (
                <div>
                  <div className="columns">
                    <div className="column is-"></div>
                    <div className="column is-6">
                      <MessageList db={firebase} />
                      <MessageBox db={firebase} />
                    </div>
                  </div> 
              </div>
          );
        }
}

export default ChatMessagesContainer;
