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
   
    
<div className="conversation-list-item">
<li key={user.id} className="conversation-title" onClick={() => onClick(user.id)}>
    <img className="conversation-photo" src="/assets/icon.png" alt="conversation" />
    {user.name}</li>
  
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