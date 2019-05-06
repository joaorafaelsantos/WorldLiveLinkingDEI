import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessages.css';

const ChatMessages = ({ messages, value, handleChange, handleClick }) => (
    <div className="chat-messages-container">
        <h1>Chat messages</h1>
        {messages.map(message => {
            return (
                <div key={message.id} className={"container" + (message.self ? " container-self" : '')}>
                    <h3>{message.name}</h3>
                    <img src={message.image} alt="Avatar" />
                    <p>{message.content}</p>
                    <span className="time-right">{message.date}</span>
                </div>
            )
        })}
        <textarea className="chat-message-write" cols="30" rows="3" value={value} onChange={handleChange}></textarea>
        <br/>
        <button onClick={handleClick}>Send</button>
    </div>
);

ChatMessages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
}

ChatMessages.defaultProps = {
    messages: []
}

export default ChatMessages;
