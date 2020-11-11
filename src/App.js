import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import chat from './chat.png';
import edit from './edit.png';
import user from './user.json';

import Header from './Header'

import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-3">
      <div id="sidebar">
        <br />
        <br />
        <a href="#" className="list-group-item">Personal Information</a>
        <a href="./survey" className="list-group-item">Self-survey Form</a>
        <a href="./analysis" className="list-group-item">Profile Analysis</a>
        <a href="./matching" className="list-group-item">Mentor Matching</a>
      </div>
    </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="col-9" id="profileInfo">
        <div className="row" id="profileImg">
          <div className="col-5 text-right"><img src={process.env.PUBLIC_URL + user.profilePic} className="rounded-circle w-50" alt="profile photo"/></div>
          <div className="col-6 text-left"><p>Edit Profile Photo</p></div>
        </div>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>Name*: </p></div>
          <div className="col-6 text-left">{user.name}<img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>University*: </p></div>
          <div className="col-6 text-left">{user.email} <img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>Year of Study*: </p></div>
          <div className="col-6 text-left">{user.studyYear} <img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>Program*: </p></div>
          <div className="col-6 text-left">{user.program} <img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>Location: </p></div>
          <div className="col-6 text-left">{user.location} <img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>Area of Interest: </p></div>
          <div className="col-6 text-left">{user.areaOfInterest} <img className="edit" src={edit} /></div>
        </div>
        <br/>
        <div className="row" id="profileDetails">
          <div className="col-5 text-right" id="profilePrompt"><p>CGPA: </p></div>
          <div className="col-6 text-left">{user.gpa} <img className="edit" src={edit} /></div>
        </div>
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row" id="profileBody">
          <Sidebar />
          <Body />
        </div>
      </div>
    );
  }
}

export default Profile;
