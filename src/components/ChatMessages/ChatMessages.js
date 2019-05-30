import React, {Component} from 'react';
import trim from 'trim';
import MessageList from './MessageList';
import './ChatMessages.css';
import { connect } from 'react-redux';

import Firebase from '../../containers/FireBaseConfig';

const mapStateToProps = ({ chat, auth }) => {
  return {
      auth,
      chat
  }
};


class ChatMessages extends Component {




  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: '',
      profilePicUrl: '',
      id: this.props.auth.data.profile.id,

    };
  }
  onChange(e){
    this.setState({
      message: e.target.value
    });
}







  onKeyup(e, toUserId){

 



    if(e.keyCode === 13 && trim(e.target.value) !== ''){

      
      var toUserId = this.props.chat.data;
      var fromUserId = this.state.id;
      var chatRoomIds = fromUserId + toUserId;
  
      var numb = chatRoomIds.match(/\d/g);
      var res = numb.map(function(v){return +v})
  
      console.log(res);
  
    
  
  
  
      var sum = res.reduce(function(a, b) { return a + b; }, 0);
  console.log(sum); // 6
  
        var chatRoomId = sum;



      var today = new Date(); 
      var dd = String(today.getDate()).padStart(2, '0'); 
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear(); 
      today = mm + '/' + dd + '/' + yyyy + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value),
        profilePicUrl: 'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg',
        chatRoom: chatRoomId.toString(),
        from: fromUserId,
        to: toUserId,
        timeStamp: today,
      });



      this.setState({
        message: ''
      });
    }
  }
  render() {
    return (

      <div className="card">
        <form>
          <textarea
              className="container"
              placeholder="Type a message"
              cols="100"
              onChange={this.onChange}
              onKeyUp={this.onKeyup}
              value={this.state.message}>
          </textarea>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ChatMessages)
