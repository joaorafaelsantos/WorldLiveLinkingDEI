import React, { Component } from 'react';
import ChatSidebar from '../components/ChatSidebar/ChatSidebar';
import { connect } from 'react-redux';
import { updateChatUser } from '../actions/chat';

const mapStateToProps = ({ chat }) => {
    return {
        chat
    }
 }


 const mapDispatchToProps = (dispatch) => ({updateChatUser:chatUserId => dispatch(updateChatUser(chatUserId))});



class ChatSidebarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    id: 0,
                    self: false,
                    name: 'Corey Soule',
                    image: 'https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    date: '20/02/2019 11:45',
                    content: 'Hello, how are you?'
                },
                {
                    id: 1,
                    self: true,
                    name: 'Kathy Ross',
                    image: 'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    date: '20/02/2019 11:48',
                    content: 'Hi Corey! Fine and you?'
                }
            ],
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeChatUserId = this.changeChatUserId.bind(this);
    }


    componentDidMount() {
        //console.log(this.props);
    }

    changeChatUserId(id){
        this.props.updateChatUser(id);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick() {
        let messages = [...this.state.messages];
        let id = messages[messages.length - 1].id + 1;
        let date = new Date();
        date = `${date.getDate() < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        messages.push(
            {
                id,
                self: true,
                name: 'Kathy Ross',
                image: 'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                date,
                content: this.state.value
            }
        )
        this.setState({
            messages,
            value: ''
        })
    }

    render() {
        return (
            <ChatSidebar onClick={this.changeChatUserId} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatSidebarContainer);
