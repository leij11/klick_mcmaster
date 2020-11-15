import MessageList from '../MessageList';
import './Messenger.css';
import chatpp from '../ConversationList/pp.JPG'
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pp from '../ConversationList/pp.JPG';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import { Modal, Button, ThemeProvider } from 'react-bootstrap';


function ConversationList(props) {
  var idn = 0;
  const desc = ["Material Eng - year 1", "General Physics tutor", "Soft Eng - year 3", "General Math tutor", "Part time student", "Civil Eng - year 2", "General Science tutor", "Business student", "Soft Eng - year 3", "General Math tutor", "Part time student"]
  const [conversations, setConversations] = useState([]);
  const [currentcon, setConversations2] = useState([]);
  useEffect(() => {
    getConversations()
    getConversations2()
  }, [])

  const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=8').then(response => {
      let newConversations = response.data.results.map(result => {
        idn += 1;
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello nice to meet you! This is a long message that needs to be truncated.',
          id: idn,
          d: desc[idn]
        };
      });
      setConversations([...conversations, ...newConversations])
    });
  }

  const getConversations2 = () => {
    idn += 1;
    axios.get('https://randomuser.me/api/?results=2').then(response => {
      let newConversations = response.data.results.map(result => {
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello nice to meet you! This is a long message that needs to be truncated.',
          id: idn,
          d: desc[idn]
        };
      });
      setConversations2([...currentcon, ...newConversations])
    });
  }

  const sendData = (name, photo, id, convos, d) => {
    var value = currentcon;
    props.itemCallback(value, name, photo, id, convos, d);
  }

  return (
    <div className="conversation-list">
      <div className="notes">
        <div className="right-title">RECENT CHATS</div>
        {
          currentcon.map(conversation =>
            <div onClick={() => { sendData(conversation.name, conversation.photo, conversation.id, conversations, conversation.d) }}>
              <ConversationListItem
                key={conversation.name}
                data={conversation}

              />
            </div>
          )
        }
      </div>
      <div className="notes">
        <div className="right-title">TUTORS</div>
        {
          conversations.map(conversation =>
            <div onClick={() => { sendData(conversation.name, conversation.photo, conversation.id, conversations, conversation.d) }}>
              <ConversationListItem
                key={conversation.name}
                data={conversation}
              />
            </div>
          )
        }
      </div>

    </div>
  );
}

function ChatListItem(props) {
  const { photo, name, id } = props.data;
  const sendData = () => {
    props.itemCallback(props.data);
  }

  return (
    <div className="chat-list-item" >
      <img className="chat-list-photo" src={photo} alt="conversation" />
      <div className="conversation-info">
        <h1 className="chat-title">{name}</h1>
      </div>
    </div>
  );
}

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentChats: [1, 2], chats: null, notes: ["111", "222"], pinned: [], current: "",
      currentNote: "", showModal: false, conversations: null, selectedId: [], groupName: "GROUP1",
      selectedUsers: [], test: "", groups: [], showGroup: false,
      descN: 0, dropdown: false, clearData: false, pinnedMsg: [], status: "ONLINE", dropdown2: false
    }

  }

  pinnedCallback = (msg) => {
    this.setState({
      pinnedMsg: [...this.state.pinnedMsg, msg]
    })
  }

  addSelected(data) {
    // const { photo, name, text, id } = data;
    var newSelectedUsers = [];
    var num = this.state.selectedUsers.length;
    var user = this.state.selectedUsers.find(user => data.id == user.id)
    var newtest = "";
    if (user == null) {
      newSelectedUsers = [...this.state.selectedUsers, { name: data.name, photo: data.photo, id: data.id, text: data.text }]

    } else {
      for (var i = 0; i < num; i++) {
        if (user.id != this.state.selectedUsers[i].id) {
          newtest += ("user" + i)
          newSelectedUsers = [...newSelectedUsers,
          {
            name: this.state.selectedUsers[i].name,
            id: this.state.selectedUsers[i].id, photo: this.state.selectedUsers[i].photo,
            text: this.state.selectedUsers[i].text
          }]
        }
      }
    }

    this.setState({
      selectedUsers: newSelectedUsers,
      test: newtest,
      groups: newSelectedUsers
    })
  }

  chatHistoryCallback = () => {
    this.setState({
      clearData: false
    })
  }

  callbackFunction = (chatData, n, p, i, convos, desc) => {
    var newPerson = { name: n, photo: p, id: i, d: desc };
    this.setState({
      chats: chatData,
      current: newPerson,
      currentNote: this.state.notes[newPerson.id - 1],
      conversations: convos
    })
  };

  changeNotes(notes) {
    var newNotes = this.state.notes;
    newNotes[this.state.current.id - 1] = notes;
    this.setState({
      notes: newNotes
    })
  }

  render() {
    const activities = ["Participated in a voting session", "Shared a post from MscTutor"];

    return (
      <div className="messenger">

        <div className="scrollable sidebar">
          <div className="upper-box">
            <div className="profile-container">
              <img id="photo" src={pp} alt="profile" />
              <div className="buttons">
                <div className="status-pp" onClick="">{this.state.status}</div>
                <div className="menu-buttons" onClick={() => this.setState({ showModal: true })}><ToolbarButton key="add" icon="ion-ios-add-circle-outline" /></div>

                <div className="menu-buttons" onClick={() => this.setState({ dropdown2: !this.state.dropdown2 })} >
                  <ToolbarButton key="cog" icon="ion-ios-cog" />
                  <div className="dropdown-box" style={{ display: this.state.dropdown2 ? "block" : "none" }}>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "ONLINE" })}>ONLINE</div>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "BUSY" })}>BUSY</div>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "OFFLINE" })}>OFFLINE</div>
                  </div>
                </div>
              </div>
            </div>
            <ConversationSearch />
          </div>
          <ConversationList itemCallback={this.callbackFunction.bind(this)} />
          {this.state.showGroup ?
            <div className="notes">
              <div className="right-title">{this.state.groupName.toUpperCase()}</div>
              {this.state.groups.map(conversation =>
                <ConversationListItem
                  key={conversation.name}
                  data={conversation} />
              )}
            </div>
            : null}
        </div>
        {this.state.current == "" ?
          <div className="content-blank">
            Start A Conversation Now With A Tutor
          </div>

          :
          <div className="scrollable content">
            <MessageList pinCallback={this.pinnedCallback.bind(this)} current={this.state.current} clear={this.state.clearData} chatHistory={this.chatHistoryCallback.bind(this)} />
          </div>
        }


        {this.state.current == "" ? null : <div className="right-component">
          <div className="chat-profile">
            <img id="chatpp" src={this.state.current.photo} alt="chat profile" />
            <p className="chatname" >{this.state.current.name}</p>
            <div className="right-tool" >
              <Toolbar
                rightItems={[
                  <div onClick={() => this.setState({ dropdown: !this.state.dropdown })} ><ToolbarButton key="info" icon="ion-ios-information-circle-outline" />

                    <div className="dropdown-box" style={{ display: this.state.dropdown ? "block" : "none" }}>
                      <div className="dropdown-item" onClick={() => this.setState({ clearData: true })}>clear chat history</div>
                      <div className="dropdown-item">export chat history</div>
                    </div>


                  </div>
                  ,
                  <ToolbarButton key="video" icon="ion-ios-videocam" />,
                  <ToolbarButton key="phone" icon="ion-ios-call" />
                ]}
              />
            </div>

          </div>
          <div className="extratool-box">
            <div className="status">
              <div className="right-title">RECENT ACTIVITY</div>
              <div className="list">
                <ul>
                  {activities.map(e =>
                    <li>{e}</li>
                  )}
                </ul>
              </div>

            </div>
            <div className="notes">
              <div className="right-title">NOTES</div>
              <div>
                <textarea onChange={(event) => this.changeNotes.bind(this, event.target.name)} ></textarea>
              </div>
            </div>
            <div className="pin">
              <div className="right-title">PINNED</div>
            </div>
            <div className="pin-container">
              {this.state.pinnedMsg.map(msg => <div className="buble-container">{msg}</div>)}
            </div>
          </div>

        </div>}
        {this.state.showModal ? <div id="myModal" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" onClick={() => this.setState({ showModal: false, groupName: "GROUP1", selectedUsers: [], test: "" })}>&times;</span>
              <h2>Create a group</h2>
            </div>
            <div class="modal-body">
              <p>Group Name:</p>
              <input placeholder="GROUP1" type="text" onChange={(event) => this.setState({ groupName: event.target.value })}></input>
              <p>Description:</p>
              <input type="text"></input>
            </div>
            <div className="group-list">
              <p>
                Select member for the group:
              </p>
              <div className="selected-box">
                {this.state.selectedUsers.map(user => <div className="list-names">{user.name} </div>)}
              </div>
              <div className="selection-box">
                {this.state.conversations.map(conversation =>
                  <div className="chat-list-item" onClick={this.addSelected.bind(this, conversation)}>
                    <ChatListItem
                      key={conversation.name}
                      data={conversation}
                    /></div>

                )}
              </div>
            </div>
            <div class="modal-footer">
              <button onClick={() => { this.setState({ showModal: false, groupName: "GROUP1", selectedUsers: [], test: "", showGroup: true }) }}>Create</button>
            </div>
          </div>
        </div>
          : null}

      </div>
    );
  }
}
export default Messenger;