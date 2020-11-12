import React, { useEffect } from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet1', 20);
  })

  const { photo, name, text, id, d } = props.data;

  return (
    <div>
      {id == 1 ? <div className="conversation-list-item1">
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className="conversation-snippet1">{text}</p>
        </div>
      </div> : <div className="conversation-list-item1">
          <img className="conversation-photo" src={photo} alt="conversation" />
          <div className="conversation-info">
            <h1 className="conversation-title">{name}</h1>
            <p className="conversation-snippet1">{text}</p>
          </div>
        </div>}


    </div>

  );
}