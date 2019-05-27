import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessagesContainer from '../../containers/ChatMessagesContainer'
import ChatSidebarContainer from '../../containers/ChatSidebarContainer'
import './Chat.css';


    



  const Chat = () => (
    <div className="row">
        <ChatSidebarContainer />
        <ChatMessagesContainer />
    </div>
);


Chat.propTypes = {
    alumni: PropTypes.arrayOf(PropTypes.object).isRequired
}

Chat.defaultProps = {
    alumni: []
}

export default Chat;
