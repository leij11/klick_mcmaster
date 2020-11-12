import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import pp from './pp.JPG';

import './ConversationList.css';

export default function ConversationList(props) {
  var idn = 0;
  const [conversations, setConversations] = useState([]);
  const [currentcon, setConversations2] = useState([]);
  useEffect(() => {
    getConversations()
    getConversations2()
  }, [])

  const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=5').then(response => {
      let newConversations = response.data.results.map(result => {
        idn++;
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello nice to meet you! This is a long message that needs to be truncated.',
          id: idn
        };
      });
      setConversations([...conversations, ...newConversations])
    });
  }
  const getConversations2 = () => {
    idn++;
    axios.get('https://randomuser.me/api/?results=2').then(response => {
      let newConversations = response.data.results.map(result => {
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello nice to meet you! This is a long message that needs to be truncated.',
          id: idn
        };
      });
      setConversations2([...currentcon, ...newConversations])
    });
  }

  return (
    <div className="conversation-list">
      <div className="upper-box">
        <div className="profile-container">
          <img id="photo" src={pp} alt="profile" />
          <div className="buttons">
            <div className="menu-buttons"><ToolbarButton key="add" icon="ion-ios-add-circle-outline" /></div>
            <div className="menu-buttons"><ToolbarButton key="cog" icon="ion-ios-cog" /></div>
          </div>
        </div>
        <ConversationSearch />
      </div>
      <div className="notes">
        <div className="right-title">RECENT CHATS</div>
        {
          currentcon.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
      <div className="notes">
        <div className="right-title">TUTORS</div>
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>

    </div>
  );
}