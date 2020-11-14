import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import user from './user.json';
import './ExploreSetting.css';

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
    this.state = {containPhoto:false, containComment:false, containContent:false,sortByLike:false, sortByComment:false, sortByTime:false};
  }

  render() {
    var filteredPosts = this.props.posts;

    if (!this.state.containPhoto) filteredPosts = filteredPosts.filter(item => item.photo != null);
    if (!this.state.containComment) filteredPosts = filteredPosts.filter(item => item.comments != null);
    if (!this.state.containContent) filteredPosts = filteredPosts.filter(item => item.content != null);

    return(
      <div className="container text-center" id="main">
        <h2>Explore Page Settings</h2>
        <br />
        <div className="form-check">
          <label className="label-inline mr-2">Filter for posts: </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containPhoto} onChange={(event) => this.setState({containPhoto: !this.state.containPhoto})} id="fire"/>
            <label for="fire">Photo</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containComment} onChange={(event) => this.setState({containComment: !this.state.containComment})} id="flood"/>
            <label for="flood">Comment</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="checkbox" checked={this.state.containContent} onChange={(event) => this.setState({containContent: !this.state.containContent})} id="flood"/>
            <label for="flood">Description</label>
          </label>
        </div>
        <div className="form-check">
          <label className="label-inline mr-2">View Posts by: </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.sortByLike} onChange={(event) => this.setState({fireChecked: !this.state.fireChecked})} id="likes"/>
            <label for="fire"># of Like(s)</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.sortByComment} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="comment"/>
            <label for="flood"># of Comment(s)</label>
          </label>
          <label className="checkbox-inline mr-2">
            <input type="radio" checked={this.state.sortByTime} onChange={(event) => this.setState({floodChecked: !this.state.floodChecked})} id="time"/>
            <label for="flood">Time Posted</label>
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
