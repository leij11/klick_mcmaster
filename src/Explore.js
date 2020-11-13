import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import chat from './chat.png';
import edit from './edit.png';
import like from './like.png';
import liked from './liked.png';
import user from './user.json';
import './Explore.css';

import React from 'react';
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
      liked:false,
      newMentor: {name:"Mentor One",year: 4, university: "McMaster University", interest:["COMPSCI","Photography","cGPA 11.2"]},
      newStudent: {name:"Student One",year: 1, university: "University of Toronto", interest:["CSC108","Midterm Review","Snowboarding","UI Design"]},
      posts: [
        {user:"Another User",
        profilePic:"./profile00.jpg",
        time:"Today 10:00AM",
        content:"Most interacted post of today",
        likes:10,
        comments:[{user:"username", text:"some random comment that a user might make to this post"}],
        photo:"./grandpa.jpg",
        id:0},
        {user:"Some User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[{user:"username", text:"Hamilton, Ontario"}],
        photo:"./grandma.jpg",
        id:1},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[],
        photo:"./profile01.jpg",
        id:2},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:[],
        photo:"./profile00.jpg",
        id:3},
        {user:"Another User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[],
        photo:"./profile01.jpg",
        id:4},
        {user:"Some User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[],
        photo:"./profile01.jpg",
        id:5},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[],
        photo:"./profile01.jpg",
        id:6},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:[],
        photo:"./profile01.jpg",
        id:7},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:[{user:"username", text:"Hamilton, Ontario"}],
        photo:"./profile01.jpg",
        id:8},
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:[{user:"username", text:"Hamilton, Ontario"}],
        photo:"./profile01.jpg",
        id:9}
      ]
    };
  }
  render() {
    var allPosts = this.state.posts;
    var popularPost = allPosts[0];
    var heart;
    this.state.liked ? heart = liked : heart = like;

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
              <span>{popularPost.likes}</span>
              <input type="text" placeholder="what's on your mind?"/>
              <div><small id="commentName">{popularPost.comments[0].user}</small> <small>{popularPost.comments[0].text}</small></div>
            </div>
          </div>
          <div className="col-2" id="welcome">
            <div className="row" id="mentor">{this.state.newMentor.name}</div>
            <div className="row" id="student">{this.state.newStudent.name}</div>
          </div>
        </div>
        <br />
        <div className="row" id="posts">
          {allPosts.map(
            ({user,time,content,likes,comments,photo}) =>
            <div className="col-2" id="post">
              <img id="image" src={process.env.PUBLIC_URL + photo} />
              <div className="content">{content}</div>
              <div className="username">{user}</div>
            </div>)}
        </div>
      </div>
    );
  }
}

export default Explore;
