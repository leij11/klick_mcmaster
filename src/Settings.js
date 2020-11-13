import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import user from './user.json';
import './Settings.css';

import React from 'react';
import Modal from 'react-modal';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containPhoto:false, containComment:false, containContent:false};
  }

  render() {
    return(
      <div className="container text-center" id="main">
        <h2>Explore Page Settings</h2>
        <br />
        <div className="form-check">
          <label className="label-inline mr-2">Filter for posts: </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containPhoto} onChange={(event) => this.setState({fireChecked: !this.state.fireChecked})} id="fire"/>
            <label for="fire">Photo</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containComment} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="flood"/>
            <label for="flood">Comment</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containContent} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="flood"/>
            <label for="flood">Description</label>
          </label>
        </div>
        <div className="form-check">
          <label className="label-inline mr-2">View Posts by: </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.containPhoto} onChange={(event) => this.setState({fireChecked: !this.state.fireChecked})} id="fire"/>
            <label for="fire">Photo</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.containComment} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="flood"/>
            <label for="flood">Comment</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.containContent} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="flood"/>
            <label for="flood">Description</label>
          </label>
        </div>
        <div className="form-check">
          <label className="label-inline mr-2">Block posts contain word(s): </label>
          <input tyep="text" />
        </div>
        <br />
        <button>Save Changes</button>
      </div>
    );
  }
}

export default Settings;
