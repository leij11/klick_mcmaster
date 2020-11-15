import 'bootstrap/dist/css/bootstrap.css';
import './ExploreSetting.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import posts from './posts.json';
import user from './user.json';

import Explore from './Explore';

import React from 'react';
import Modal from 'react-modal';

class ExploreSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showPhoto:false, showComment:false,
      sortByLike:false, sortByComment:false,
      block:false,blockedWord:null,word:null};
  }

  render() {
    var filteredPosts = posts;

    if (this.state.showPhoto) filteredPosts = posts.filter(item => item.photo !== null);
    if (this.state.showComment) filteredPosts = posts.filter(item => item.comments.length !== 0);
    if (this.state.block) filteredPosts = filteredPosts.filter(item => !item.content.toLowerCase().includes(this.state.blockedWord));

    if (this.state.sortByLike) filteredPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    if (this.state.sortByComment) filteredPosts.sort((a, b) => (a.comments.length < b.comments.length) ? 1 : -1);

    return(
      <div>
      <div className="container text-center" id="main">
        <h2>Explore Page Settings</h2>
        <br />
        <div className="row">
          <div className="col text-right">Only show posts contain: </div>
          <div className="col-6 text-left">
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
          <div className="col-6 text-left">
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
          <div className="col-6 text-left" id="inline">
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
            <span><button className="buttonStyle" disabled={!this.state.block} onClick={()=> this.setState({block:false,blockedWord:null,word:null})}>Remove Block</button></span>
          </div>
        </div>
      </div>
        <div className="text-center" id="preview"><h3>Explore Page Preview</h3></div>
        <div id="pre"><Explore posts={filteredPosts}/></div>
      </div>
    );
  }
}

export default ExploreSetting;
