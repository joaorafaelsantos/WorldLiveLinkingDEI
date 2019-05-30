import React, { Component } from 'react';
import './ChatSidebar.css';


//users array firebase
//var users = ["178", "145"];
const ChatSidebar = ({onClick, users}) => (
    <div className="chat-sidebar-container">
        <h1>Chat sidebar</h1>
        <h6>This functionalities are purely illustrative on this prototype version</h6>
        <input type="text" placeholder="Search a person"/>
        <ul>
            {users.map((user) => (<li className="chat-sidebar-item" onClick={() => onClick(user)}>{user}</li>))}
            
        </ul>
    </div>
);

// ChatSidebar.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.object).isRequired
// }

// ChatSidebar.defaultProps = {
//     messages: []
// }

export default ChatSidebar;