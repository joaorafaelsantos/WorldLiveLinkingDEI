import React  from 'react';
import PropTypes from 'prop-types';
import ChatMessagesContainer from '../../containers/ChatMessagesContainer'
import ChatSidebarContainer from '../../containers/ChatSidebarContainer'

import '../ChatMessages/Messenger.css';

  const Chat = () => (
    <div className="messenger">
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
