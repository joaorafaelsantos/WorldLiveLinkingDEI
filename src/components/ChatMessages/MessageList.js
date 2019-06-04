import React, {Component} from 'react';
import Message from './Message';
import './ChatMessages.css';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateArrayUsers} from '../../actions/chat';
//import '../ChatMessages/ConversationListItem.css';


import '../ChatMessages/Messenger.css';



const mapStateToProps = ({chat, auth}) => {
    return {
        auth,
        chat
    }
};


const mapDispatchToProps = (dispatch) => ({updateArrayUsers: newArrayUsers => dispatch(updateArrayUsers(newArrayUsers))});


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            id: this.props.auth.data.profile.id,
        };
    }

    componentDidMount() {
        this.getFromFirebase(this.props.chat.data);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.chat.data !== this.props.chat.data) {
            this.getFromFirebase(this.props.chat.data);
        }

        if (prevProps.auth.data.profile.id !== this.props.auth.data.profile.id) {

            this.setState({id: this.props.auth.data.profile.id});
        }
    }

    getFromFirebase(toUserId) {
        //const chatRoomId = '2_1';
        //var toUserId = '5ce58fdcd8b6d3e887adf7d4';
        var fromUserId = this.state.id;
        var chatRoomIds = fromUserId + toUserId;

        var numb = chatRoomIds.match(/\d/g);
        var res = numb.map(function (v) {
            return +v
        })

        var sum = res.reduce(function (a, b) {
            return a + b;
        }, 0);

        var chatRoomId = sum;


        let app = this.props.db.database().ref('messages').orderByChild('chatRoom').equalTo(chatRoomId.toString());
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });


    }

    getData(values) {
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
            let mine = "mine";
     if (message.from !== this.state.id){
         mine = "";
     }
            return (
                <div className={[
                    'message',
                    `${mine ? 'mine' : ''}`
                  ].join(' ')}>
                    <div className="bubble-container">
                      <div className="bubble" title={message.timeStamp}>
                      <Message message={message.message}/>
                      </div>
                    </div>
                  </div>
                            
                            
                            
                   
            )
        });
        return (
            //<div className="toolbar">
              //  <h1 class="toolbar-title" align="center">Messenger</h1>
                <div className="message-list">

                {messageNodes}
            </div>
           // </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);