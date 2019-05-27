import React from 'react';
import './ChatSidebar.css';

const ChatSidebar = () => (
    <div className="chat-sidebar-container">
        <h1>Chat sidebar</h1>
        <h6>This functionalities are purely illustrative on this prototype version</h6>
        <input type="text" placeholder="Search a person"/>
        <ul>
            <li className="chat-sidebar-item">
                Corey Soule
            </li>
            <li className="chat-sidebar-item">
            Patrick Wilson
            </li>
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
