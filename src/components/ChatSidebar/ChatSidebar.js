import React from 'react';
import './ChatSidebar.css';
import '../ChatMessages/ConversationListItem.css';
import shave from 'shave';
//import '../ChatMessages/Toolbar.css'
import '../ChatMessages/ConversationList.css'
//import '../ChatMessages/Messenger.css'


const ChatSidebar = ({ onClick, users }) => (
  
       

 


    <div className="conversation-list">

{users.map((user) => (
   
    
<div className="conversation-list-item"  key={user.id} onClick={() => onClick(user.id)}>
        <img className="conversation-photo" src="/assets/icon.png" alt="conversation" />
        <div className="conversation-info">
            <h1 className="conversation-title">{user.name}</h1>
            <p className="conversation-snippet">...</p>
        </div>
</div>

))}
  
</div>




);

// ChatSidebar.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.object).isRequired
// }

// ChatSidebar.defaultProps = {
//     messages: []
// }

export default ChatSidebar;