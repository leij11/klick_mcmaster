import 'bootstrap/dist/css/bootstrap.css';
import './Explore.css';

import logo from './images/logo.png';
import chat from './images/chat.png';
import edit from './images/edit.png';
import like from './images/like.png';
import liked from './images/liked.png';
import likedb from './images/liked-b.png';
import user from './user.json';
import posts from './posts.json';

import React from 'react';
import Modal from 'react-modal';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails:false,
      currentId:0,
      liked:false,
      newComment:{},
      comment:null,
      newMentor: {name:"Nick Russell",year: 4, university: "McMaster University", interest:["COMPSCI","Photography","cGPA11.2"]},
      newStudent: {name:"Emily Aloha",year: 1, university: "University of Toronto", interest:["CSC108","MidtermReview","Snowboarding","UIDesign"]}
    };
  }

  handleOpenModal(index) {
    this.setState({currentId:index, showDetails: true});
  }

  handleCloseModal() {
    this.setState({showDetails: false});
  }

  comment() {
    this.setState({newComment:{user:user.name,text:this.state.comment}});
  }

  render() {
    var allPosts;
    (this.props.posts!=null) ? allPosts = this.props.posts : allPosts = posts;
    var sortedPosts = Object.assign([], allPosts);
    sortedPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    var popularPost = sortedPosts[0];
    var heart;
    var heartb;
    var likes = popularPost.likes;
    if(this.state.liked)
    { heart = liked;
      likes = popularPost.likes + 1; }
    else
    { heart = like;}

    return (
      <div className="container" id="mainPage">
        <br/>
        <div className="row" id="announce">
          <div className="col-9" id="hotTopic">
            <img id="hotPhoto" src={process.env.PUBLIC_URL + popularPost.photo} />
            <div className="content">{popularPost.content}</div>
            <div className="row hotUser">
              <div className="col-1">
                <img src={process.env.PUBLIC_URL + popularPost.profilePic} className="rounded-circle" alt="profile photo" id="profilePhoto"/>
              </div>
              <div className="hotUserId col-5">
                <div className="user">{popularPost.user}</div>
                <div className="time">{popularPost.time}</div>
              </div>
            </div>
            <div className="interaction">
              <img src={heart} onClick={()=> this.setState({liked:!this.state.liked})} id="heart"/>
              <span>{likes}</span>
              <input type="text"
                     className="inputWithStyle"
                     onChange={e=>{this.setState({comment: e.target.value})}}
                     onKeyPress={e => {if (e.key === 'Enter')
                     {
                       e.preventDefault();
                       this.comment()
                       this.setState({comment:''});
                     }
                     }}
                     placeholder="what's on your mind?"
                     value={this.state.comment}/>
              <div><small id="commentName">{this.state.newComment.user}</small> <small id="commentText">{this.state.newComment.text}</small></div>
            </div>
          </div>
          <div className="col-2" id="welcome">
            <div className="row" id="mentor">
              <div id="id">{this.state.newMentor.name}</div>
              <div id="info"><span>Year {this.state.newMentor.year}</span>|<span>{this.state.newMentor.university}</span></div>
              <div id="interest">{this.state.newMentor.interest.map(item=><span id="tag">{item}</span>)}</div>
            </div>
            <div className="row" id="student">
              <div id="id">{this.state.newStudent.name}</div>
              <div id="info"><span>Year {this.state.newStudent.year}</span>|<span>{this.state.newStudent.university}</span></div>
              <div id="interest">{this.state.newStudent.interest.map(item=><span id="tag">{item}</span>)}</div>
            </div>
          </div>
        </div>
        <br />
        <div className="row" id="posts">
          {allPosts.map(
            ({user,profilePic,time,content,likes,comments,photo,id}) =>
            <div className="col-2 post" id={id} onClick={this.handleOpenModal.bind(this,id)}>
              <img id="image" src={process.env.PUBLIC_URL + photo} />
              <div className="content">"{content}"</div>
              <div className="username">{user}</div>
            </div>)}
        </div>
        <Modal isOpen={this.state.showDetails} id="details">
          <div className="container">
            <div><button onClick={this.handleCloseModal.bind(this)} className="close">Close</button></div>
            <div className="row">
              <img src={process.env.PUBLIC_URL + allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].profilePic} className="rounded-circle" alt="profile photo" id="profilePhoto"/>
              <div id="postsDetails">
                <div id="userDetails">{allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].user}</div>
                <div id="timeDetails">{allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].time}</div>
              </div>
            </div>
            <div className="row">
              <div className="row" id="contentDetails">" {allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].content} "</div>
              <div id="photoDetails"><img className="row" src={allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].photo}/></div>
            </div>
            <div>
              <img src={likedb} id="heart"/><span>{allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].likes}</span>
              <br/>
              <div id="commentDetails">{(allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].comments!=null) ? allPosts[allPosts.findIndex(item => item.id == this.state.currentId)].comments.map(({user,text}) => <div><span id="bold">{user}: </span><span>{text}</span></div>) : null}</div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Explore;
