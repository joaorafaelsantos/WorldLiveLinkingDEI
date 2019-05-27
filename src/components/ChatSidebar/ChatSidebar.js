import React, { Component } from 'react';
import './ChatSidebar.css';
import { connect } from 'react-redux'

const ChatSidebar = ({onClick}) => (
    <div className="chat-sidebar-container">
        <h1>Chat sidebar</h1>
        <h6>This functionalities are purely illustrative on this prototype version</h6>
        <input type="text" placeholder="Search a person"/>
        <ul>
            <li className="chat-sidebar-item" onClick={() => onClick("2_1")}>
                Corey Soule
            </li>
            <li className="chat-sidebar-item" onClick={() => onClick("3_1")}>
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
