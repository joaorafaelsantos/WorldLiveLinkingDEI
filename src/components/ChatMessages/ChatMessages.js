import React, { Component } from 'react';
import trim from 'trim';
import './ChatMessages.css';
import { connect } from 'react-redux';

const mapStateToProps = ({ chat, auth }) => {
  return {
    auth,
    chat
  }
};

class ChatMessages extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: '',
      profilePicUrl: '',
      id: this.props.auth.data.profile.id,
      name: this.props.auth.data.profile.name,

    };
  }
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyup(e) {

    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      var toUserId = this.props.chat.data;
      var fromUserId = this.state.id;
      var chatRoomIds = fromUserId + toUserId;

      var numb = chatRoomIds.match(/\d/g);
      var res = numb.map(function (v) { return +v })
      var sum = res.reduce(function (a, b) { return a + b; }, 0);

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
        profilePicUrl: 'assets/icon.png',
        chatRoom: chatRoomId.toString(),
        name: this.state.name,
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
        <form style={{display:'flex',flexDirection:'column'}}>
          <textarea
            className="container"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}>
          </textarea>
          <button style={{background:'green',color:'white',width:'4rem',
            marginLeft:'26.2rem',padding:'5px 10px',cursor:'pointer'}}>
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ChatMessages)