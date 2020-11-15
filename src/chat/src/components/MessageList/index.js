import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  var [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  }, [])

  const getMessages = () => {
    var tempMessages = [
      {
        id: 1,
        author: 'apple',
        message: 'Hello world! This is a long message',
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        author: 'orange',
        message: 'Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 4,
        author: 'apple',
        message: 'Line 200:  Expected === and instead saw ==',
        timestamp: new Date().getTime()
      },
      {
        id: 5,
        author: 'apple',
        message: 'get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
    ]
    setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
          pinCallback={props.pinCallback}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  const addMessages = (msg) => {
    if(props.clear) {
      messages = []
    }
    setMessages([...messages, {
      id: 1,
      author: 'apple',
      message: msg,
      timestamp: new Date().getTime()
    }])


  }


  return (
    <div className="message-list">
      <div>

        <div id="Title">
            <img id="smallpp" src={props.current.photo} />
            <div className="name-box">
              <h1>{props.current.name}</h1>
              <div id="desc">{props.current.d}</div>
            </div>
        </div>
      </div>


      {props.clear ? <div className="message-list-container"></div> : <div className="message-list-container">{renderMessages()}</div> }
      <div className="compose">
        <div className="tool-container">
          {
            [
              <ToolbarButton key="photo" icon="ion-ios-camera" size="small" />,
              <ToolbarButton key="image" icon="ion-ios-image" size="small" />,
              <ToolbarButton key="audio" icon="ion-ios-mic" size="small" />,
              <ToolbarButton key="money" icon="ion-ios-card" size="small" />,
              <ToolbarButton key="games" icon="ion-logo-game-controller-b" size="small" />,
              <ToolbarButton key="emoji" icon="ion-ios-happy" size="small" />
            ]
          }
        </div>

        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          onKeyDown={event => { if (event.key === "Enter") { addMessages(event.target.value); event.target.value = ""; props.chatHistory()} }}
        
        />
      </div>
    </div>
  );
}