import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';

import p1 from './images/profile00.jpg';
import p2 from './images/profile01.jpg';
import p3 from './images/profile02.jpg';
import p4 from './images/profile03.jpg';
import p5 from './images/profile04.jpg';
import p6 from './images/profile05.jpg';

import logo from './images/logo.png';
import chat from './images/chat.png';
import edit from './images/edit.png';
import user from './user.json';

import Survey from './Survey';

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
      <div className="col-3" style={{paddingRight: "0"}}>
        <div id="sidebar">
          <br />
          <br />


          {/* <NavLink eventKey="link-1" to="/home">Personal Information</NavLink>
            <NavLink eventKey="link-2" to="/survey">Self-survey Form</NavLink>
            <NavLink eventKey="link-3" to="/analytics">Profile Analysis</NavLink>
            <NavLink eventKey="link-3" to="/analytics">Mentor Matching</NavLink> */}

          <NavLink eventKey="link-1" to="/profile" className="list-group-item">Personal Information</NavLink>
          <NavLink eventKey="link-2" to="/profile/survey" className="list-group-item">Self-survey Form</NavLink>
          <NavLink eventKey="link-3" to="./analysis" className="list-group-item">Profile Analysis</NavLink>
          <NavLink eventKey="link-4" to="./matching" className="list-group-item">Mentor Matching</NavLink>

          
          <Route path={"/matching"} component="" />


        </div>
      </div>
    );
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: false, editUni: false, editYear: false, editProgram: false, editLocation: false, editInterest: false, editGpa: false, editProfile: false,
      username: user.name, university: user.university, studyYear: user.studyYear,
      program: user.program, location: user.location,
      interest: user.areaOfInterest, cgpa: user.gpa,
      profilePic: user.profilePic,
      textName: "", textUni: "", textYear: "",
      textProgram: "", textLocation: "",
      textInterest: "", textGpa: ""
    };
  }

  render() {
    var username = this.state.username;
    var university = this.state.university;
    var year = this.state.studyYear;
    var program = this.state.program;
    var location = this.state.location;
    var interest = this.state.interest;
    var gpa = this.state.cgpa;
    var profiles;

    if (this.state.editName) {
      username = <input type="text"
        value={this.state.textName}
        onChange={e => { this.setState({ textName: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ username: this.state.textName, editName: false });
          }
        }} />;
    }

    if (this.state.editUni) {
      university = <input type="text"
        value={this.state.textUni}
        onChange={e => { this.setState({ textUni: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ university: this.state.textUni, editUni: false });
          }
        }} />;
    }

    if (this.state.editYear) {
      year = <input type="number"
        value={this.state.textYear}
        onChange={e => { this.setState({ textYear: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ studyYear: this.state.textYear, editYear: false });
          }
        }} />;
    }

    if (this.state.editProgram) {
      program = <input type="text"
        value={this.state.textProgram}
        onChange={e => { this.setState({ textProgram: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ program: this.state.textProgram, editProgram: false });
          }
        }} />;
    }

    if (this.state.editLocation) {
      location = <input type="text"
        value={this.state.textLocation}
        onChange={e => { this.setState({ textLocation: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ location: this.state.textLocation, editLocation: false });
          }
        }} />;
    }

    if (this.state.editInterest) {
      interest = <input type="text"
        value={this.state.textInterest}
        onChange={e => { this.setState({ textInterest: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ interest: this.state.textInterest.split(","), editInterest: false });
          }
        }} />;
    }

    if (this.state.editGpa) {
      gpa = <input type="text"
        value={this.state.textGpa}
        onChange={e => { this.setState({ textGpa: e.target.value }) }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ cgpa: this.state.textGpa, editGpa: false });
          }
        }} />;
    }

    if (this.state.editProfile) {
      var photos = [p1, p2, p3, p4, p5, p6];
      profiles = photos.map(photo => <img className="profilePhotos" src={photo} onClick={() => this.setState({ profilePic: photo, editProfile: false })} />);
    }

    return (
      <div className="col-9" id="profileInfo" style={{paddingLeft: "0"}}>
        <Route path={"/profile"} exact component={
          () =>  <div>
          <div className="row" id="profileImg">
            <img src={process.env.PUBLIC_URL + this.state.profilePic} className="rounded-circle profileImage" alt="profile" />
            <div className="text-center" id="changeImage" onClick={() => { this.setState({ editProfile: true }) }}>Edit Profile Photo</div>
            <div>{profiles}</div>
          </div>
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>Name*: </p></div>
            <div className="col-6 text-left">{username}<img className="edit" onClick={() => { this.setState({ editName: true }) }} src={edit} /></div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>University*: </p></div>
            <div className="col-6 text-left">{university} <img className="edit" onClick={() => { this.setState({ editUni: true }) }} src={edit} /></div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>Year of Study*: </p></div>
            <div className="col-6 text-left">{year} <img className="edit" onClick={() => { this.setState({ editYear: true }) }} src={edit} /></div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>Program*: </p></div>
            <div className="col-6 text-left">{program} <img className="edit" onClick={() => { this.setState({ editProgram: true }) }} src={edit} /></div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>Location: </p></div>
            <div className="col-6 text-left">{location} <img className="edit" onClick={() => { this.setState({ editLocation: true }) }} src={edit} /></div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>Area of Interest: <br /><small>please split item by comma(,)</small></p></div>
            <div className="col-6 text-left">
              {(!this.state.editInterest) ? interest.map(area => <span className="interestTag">{area}</span>) : interest}
              <img className="edit" onClick={() => { this.setState({ editInterest: true }) }} src={edit} />
            </div>
          </div>
          <br />
          <div className="row" id="profileDetails">
            <div className="col-5 text-right" id="profilePrompt"><p>CGPA: </p></div>
            <div className="col-6 text-left">{gpa} <img className="edit" onClick={() => { this.setState({ editGpa: true }) }} src={edit} /></div>
          </div>
        </div>
      } />
      <Route path={"/profile/survey"} exact component={() => 
        <Survey />
      } />
      </div>
      
     
    );
  }
}

class ProfilePhoto extends React.Component {
  render() {
    return (
      <div className="m-5">
        <img src={process.env.PUBLIC_URL + user.profilePic} className="rounded-circle profileImage" alt="profile" />
      </div>
    );
  }
};

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" id="profileBody">
          <Router>
            <Sidebar />
            <Body />
          </Router>
        </div>
      </div>
    );
  }
}

export default Profile;
