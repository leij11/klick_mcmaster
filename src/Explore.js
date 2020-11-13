import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import edit from './images/edit.png';
import like from './images/like.png';
import liked from './images/liked.png';
import user from './user.json';
import './Explore.css';

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
      newMentor: {name:"Mentor One",year: 4, university: "McMaster University", interest:["COMPSCI","Photography","cGPA11.2"]},
      newStudent: {name:"Student One",year: 1, university: "University of Toronto", interest:["CSC108","MidtermReview","Snowboarding","UIDesign"]},
      posts: [
        {user:"Another User",
        profilePic:"./profile00.jpg",
        time:"Today 10:00AM",
        content:"Most interacted post of today",
        likes:1,
        comments:[{user:"username", text:"some random comment that a user might make to this post"}],
        photo:"./grandpa.jpg",
        id:0},
        {user:"Some User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:2,
        comments:[{user:"username", text:"Hamilton, Ontario"}],
        photo:"./grandma.jpg",
        id:1},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:3,
        comments:[],
        photo:"./profile01.jpg",
        id:2},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:4,
        comments:[],
        photo:"./profile00.jpg",
        id:3},
        {user:"Another User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:5,
        comments:[],
        photo:"./profile01.jpg",
        id:4},
        {user:"Some User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:6,
        comments:[],
        photo:"./profile01.jpg",
        id:5},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:7,
        comments:[],
        photo:"./profile01.jpg",
        id:6},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:8,
        comments:[],
        photo:"./profile01.jpg",
        id:7},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:9,
        comments:[{user:"username", text:"Hamilton, Ontario"}],
        photo:"./profile01.jpg",
        id:8},
        {user:"Sample User",
        profilePic:"./profile00.jpg",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:[{user:"username", text:"Hamilton, Ontario"}, {user:"newName", text:"some other comment"}],
        photo:"./profile01.jpg",
        id:9}
      ]
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
    var allPosts = this.state.posts;
    var sortedPosts = Object.assign([], allPosts);
    sortedPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    var popularPost = sortedPosts[0];
    var heart;
    var likes = popularPost.likes;
    if(this.state.liked)
    { heart = liked;
      likes = popularPost.likes + 1; }
    else
    { heart = like; }

    return (
      <div className="container" id="main">
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
              <img src={process.env.PUBLIC_URL + heart} onClick={()=> this.setState({liked:!this.state.liked})} id="heart"/>
              <span>{likes}</span>
              <input type="text"
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
              <div><small id="commentName">{this.state.newComment.user}</small> <small>{this.state.newComment.text}</small></div>
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
          <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
          <div className="container">
            <div className="row">
              <img src={process.env.PUBLIC_URL + allPosts[this.state.currentId].profilePic} className="rounded-circle" alt="profile photo" id="profilePhoto"/>
              <div className="user">{allPosts[this.state.currentId].user}</div>
              <div className="time">{allPosts[this.state.currentId].time}</div>
            </div>
            <div className="row">
              <div className="row">{allPosts[this.state.currentId].content}</div>
              <img className="row" src={allPosts[this.state.currentId].photo}/>
            </div>
            <div className="row">
              <img src={process.env.PUBLIC_URL + heart} onClick={()=> this.setState({liked:!this.state.liked})} id="heart"/>
              <div>{allPosts[this.state.currentId].comments.map(({user,text}) => <div><span>{user} </span><span>{text}</span></div>)}</div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Explore;
