import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import firebase from '../containers/FireBaseConfig';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const chatRoomId = '2_1';
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

export default MessageList
