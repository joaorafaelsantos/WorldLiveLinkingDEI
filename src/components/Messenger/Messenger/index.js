import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import ToolbarButton from "../ToolbarButton";
import Toolbar from "../Toolbar";

export default class Messenger extends Component {
  render() {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
  }
}