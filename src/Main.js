
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

import logo from './images/logo.png';
import chat from './images/chat.png';
import setting from './images/setting.png';

import Profile from './Profile';
import Explore from './Explore';
import ExploreSetting from './ExploreSetting';
import Location from './location';

import Analytics from "./components/Analytics";
import Discussion from "./components/Discussion";
import Match from "./components/Match";


import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg" id="header">
            <div className="container">
              <a className="navbar-brand">
                <img className="logo" src={logo} alt="Logo" />
              </a>
              <div className="collapse navbar-collapse" id="navText">

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-item  nav-link" to="/explore">Explore</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/discussion">Discussion</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/location">People Around Me</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/analysis">
                      Analysis
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/match">
                      Match
                    </NavLink>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="./chat_lastbuild/chat.html"><img className="chat" src={chat} alt="chat" /></a>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/setting"><img className="chat" src={setting} alt="setting" /></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {
            // Render a different component depending on the path, "/" is the
            // "no path" case.  We add the property exact to have it render
            // only on exact matches, otherwise "/" would also match for
            // things like "/about".
          }
          <Route exact path="/" component={Explore} />
          <Route path="/explore"><Explore /></Route>
          <Route path="/discussion"><Discussion /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/setting"><ExploreSetting /></Route>
          <Route path="/location"><Location /></Route>
          <Route path={"/analysis"}>
            <Analytics />
          </Route>
          <Route path={"/match"}>
            <Match />
          </Route>
        </div>

      </Router>
    );
  }
}

export default Main;
