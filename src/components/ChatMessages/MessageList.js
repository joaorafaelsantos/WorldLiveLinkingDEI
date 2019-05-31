import React, {Component} from 'react';
import Message from './Message';
import './ChatMessages.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateArrayUsers } from '../../actions/chat';



const mapStateToProps = ({ chat, auth }) => {
  return {
      auth,
      chat
  }
};


const mapDispatchToProps = (dispatch) => ({updateArrayUsers:newArrayUsers => dispatch(updateArrayUsers(newArrayUsers))});




class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      id: this.props.auth.data.profile.id,
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

  getFromFirebase(toUserId){
    //const chatRoomId = '2_1';
    console.log(this.props.chat.data);
    //var toUserId = '5ce58fdcd8b6d3e887adf7d4';
    var fromUserId = this.state.id;
    var chatRoomIds = fromUserId + toUserId;

    var numb = chatRoomIds.match(/\d/g);
    var res = numb.map(function(v){return +v})

        //console.log("somatorio messagesList"+res);

     



    var sum = res.reduce(function(a, b) { return a + b; }, 0);
      //console.log("somatorio messagesList"+sum); // 6

      var chatRoomId = sum;
      

    let app = this.props.db.database().ref('messages').orderByChild('chatRoom').equalTo(chatRoomId.toString());
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
          
          <p>{message.name}: <Message message = {message.message} /></p>
          <p className="time-right" >{message.timeStamp}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);