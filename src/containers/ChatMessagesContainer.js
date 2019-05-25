import React, { Component } from 'react';
import ChatMessages from '../components/ChatMessages/ChatMessages';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';
import firebase from 'firebase';


class ChatMessagesContainer extends Component {
    constructor(props){
        super(props);
        var config = {
          apiKey: "AIzaSyDGGTzAghdMCsCu1deyMps3sCEmn6s8nXY",
          authDomain: "friendlychat-45e21.firebaseio.com",
          databaseURL: "https://friendlychat-45e21.firebaseio.com/",
          projectId: "friendlychat-45e21",
          storageBucket: "friendlychat-45e21.appspot.com",
          messagingSenderId: "friendlychat-45e21"
        };
        firebase.initializeApp(config);
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
