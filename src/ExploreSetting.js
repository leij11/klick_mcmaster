import 'bootstrap/dist/css/bootstrap.css';
import './ExploreSetting.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import user from './user.json';

import Explore from './Explore';
import Settings from './Settings';

import React from 'react';
import Modal from 'react-modal';

import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class ExploreSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showPhoto:false, showComment:false,
      sortByLike:false, sortByComment:false,
      block:false,blockedWord:null,word:null,
      posts: [
      {user:"Another User",
      profilePic:"./profile00.jpg",
      time:"Today 10:00AM",
      content:"Description 1",
      likes:1,
      comments:[{user:"username", text:"some first comment that a user might make to this post"}],
      photo:"./grandpa.jpg",
      id:0},
      {user:"Some User",
      profilePic:"./profile00.jpg",
      time:"Yesterday 2:05PM",
      content:"Description 2",
      likes:2,
      comments:[{user:"username", text:"comment for 2nd post"}],
      photo:"./grandma.jpg",
      id:1},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No comment 3",
      likes:3,
      comments:[],
      photo:"./profile01.jpg",
      id:2},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No comment 4",
      likes:4,
      comments:[],
      photo:"./profile00.jpg",
      id:3},
      {user:"Another User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"Some special text 5",
      likes:5,
      comments:[{user:"myname", text:"comment for 5th post"}],
      photo:"./profile01.jpg",
      id:4},
      {user:"Some User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No Comment 6",
      likes:6,
      comments:[],
      photo:"./profile01.jpg",
      id:5},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No Photo 7",
      likes:7,
      comments:[{user:"username7", text:"new comment for 7th post"}],
      photo:null,
      id:6},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No Comment 8",
      likes:8,
      comments:[],
      photo:"./profile01.jpg",
      id:7},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"No Photo 9",
      likes:9,
      comments:[{user:"user9 Name", text:"first comment for 9th post"}],
      photo:null,
      id:8},
      {user:"Sample User",
      profilePic:"./profile00.jpg",
      time:"2020-01-01",
      content:"Description 10",
      likes:10,
      comments:[{user:"username", text:"Hamilton, Ontario"}, {user:"newName", text:"some other comment"}],
      photo:"./profile01.jpg",
      id:9}
    ]};
  }

  render() {
    var filteredPosts = this.state.posts;

    if (this.state.showPhoto) filteredPosts = this.state.posts.filter(item => item.photo !== null);
    if (this.state.showComment) filteredPosts = this.state.posts.filter(item => item.comments.length !== 0);
    if (this.state.block) filteredPosts = this.state.posts.filter(item => !item.content.includes(this.state.blockedWord));

    if (this.state.sortByLike) filteredPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    if (this.state.sortByComment) filteredPosts.sort((a, b) => (a.comments.length < b.comments.length) ? 1 : -1);

    return(
      <div>
      <div className="container text-center" id="main">
        <h2>Explore Page Settings</h2>
        <br />
        <div className="row">
          <div className="col text-right">Only show posts contain: </div>
          <div className="col-8 text-left">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" checked={this.state.showPhoto} onChange={(event) => this.setState({showPhoto: !this.state.showPhoto})} id="photo"/>
              <label className="custom-control-label" for="photo">Photo</label>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" checked={this.state.showComment} onChange={(event) => this.setState({showComment: !this.state.showComment})} id="comment"/>
              <label className="custom-control-label" for="comment">Comment(s)</label>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col text-right">View posts in descending order by: </div>
          <div className="col-8 text-left">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" checked={this.state.sortByLike} onChange={(event) => this.setState({sortByLike: !this.state.sortByLike})} id="likes"/>
              <label className="custom-control-label" for="likes"># of Like(s)</label>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" checked={this.state.sortByComment} onChange={(event) => this.setState({sortByComment: !this.state.sortByComment})} id="comments"/>
              <label className="custom-control-label" for="comments"># of Comment(s)</label>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col text-right">Block posts contain word: </div>
          <div className="col-8 text-left" id="inline">
            <input type="text" className="noStyle"
              onChange={e=>{this.setState({word: e.target.value})}}
              onKeyPress={e => {if (e.key === 'Enter')
              {
                if(e.target.value!="")
                {
                  e.preventDefault();
                  this.setState({block:true, blockedWord:this.state.word, word:""});
                }
              }
            }} value={this.state.word}/>
            <span><button disabled={!this.state.block} onClick={()=> this.setState({block:false,blockedWord:null,word:null})}>Remove Block</button></span>
          </div>
        </div>
      </div>
        <Explore posts={filteredPosts}/>
      </div>
    );
  }
}

export default ExploreSetting;
