import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chat from '../components/Chat/Chat';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';
import Header from '../components/Header';
import firebase from 'firebase';



const mapStateToProps = ({ alumni }) => {
    return {
        alumni
    }
}

class ChatContainer extends Component {
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
      <div className="container">
     
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps)(ChatContainer)
