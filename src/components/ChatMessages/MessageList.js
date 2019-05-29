import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import { connect } from 'react-redux';
import firebase from '../../containers/FireBaseConfig';
import { BrowserRouter as Router, Route } from 'react-router-dom'



const mapStateToProps = ({ chat, auth }) => {
  return {
      auth,
      chat
  }
};

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      id: this.props.auth.data.profile.id
    };
  }


  componentDidMount() {

    this.getFromFirebase(this.props.chat.data);
  }

  componentDidUpdate(prevProps , prevState) {
    if (prevProps.chat.data !== this.props.chat.data){
      this.getFromFirebase(this.props.chat.data);
    }

    if (prevProps.auth.data.profile.id !== this.props.auth.data.profile.id){
      this.setState({id: this.props.auth.data.profile.id});
    }
  }

  getFromFirebase(chatRoomId){
    //const chatRoomId = '2_1';
    let app = this.props.db.database().ref('messages').orderByChild('chatRoom').equalTo(chatRoomId);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
   

  }



  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: messages
      });
      const data =  messages;
     /* UNIQUE CHAT ROOMS FROM FIREBASE
      var unique = [];
      data.filter(function(item){
        var i = unique.findIndex(x => x.chatRoom == item.chatRoom);
        if(i <= -1){
          unique.push({chatRoom: item.chatRoom});
        }
        return null;
      });
      console.log(unique);*/
  }

  render() {
    let messageNodes = this.state.messages.map((message, index) => {
      return (
        <div key={index} className="card">
          <div className="container img chat-message-write">
          <div className="fixed">
          <img src={message.profilePicUrl}></img>
          </div>
          <div className="flex-item">
          <Message message = {message.message} />
          </div>
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageList);
