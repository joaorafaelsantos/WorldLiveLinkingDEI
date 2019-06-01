import React from 'react';
import './ChatSidebar.css';

const ChatSidebar = ({ onClick, users }) => (
    <div className="chat-sidebar-container">
        <h4>Members</h4>
        <ul className="users-group">
            {users.map((user) => (<li key={user.id} className="chat-sidebar-item" onClick={() => onClick(user.id)}>
            <i class="fas fa-user"></i>
            {user.name}</li>))}
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