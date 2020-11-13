import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import chat from './chat.png';
import edit from './edit.png';
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
      newMentor: {name:"Mentor One",year: 4, university: "McMaster University", interest:["COMPSCI","Photography","cGPA 11.2"]},
      newStudent: {name:"Student One",year: 1, university: "University of Toronto", interest:["CSC108","Midterm Review","Snowboarding","UI Design"]},
      posts: [
        {user:"Another User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"},
        {user:"Some User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Another User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"},
        {user:"Some User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:0,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        },
        {user:"Sample User",
        time:"2020-01-01",
        content:"some sample content",
        likes:10,
        comments:["Hamilton, Ontario"],
        photo:"./profile01.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="container" id="main">
        <br/>
        <div className="row" id="announce">
          <div className="col-9" id="hotTopic"></div>
          <div className="col-2" id="welcome">
            <div className="row" id="mentor">{this.state.newMentor.name}</div>
            <div className="row" id="student">{this.state.newStudent.name}</div>
          </div>
        </div>
        <br />
        <div className="row" id="posts">
          {this.state.posts.map(
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
