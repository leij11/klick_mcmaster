import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import logo from './images/logo.png';
import chat from './images/chat.png';
import setting from './images/setting.png';
import user from './user.json';


import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Router>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar" id="header">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img className="logo" src={logo} alt="Logo" />
              </a>
              <div className="collapse navbar-collapse" id="navText">

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="./explore">Explore</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./discussion">Discussion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./location">People Around Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./profile">Profile</a>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item">
                      <img className="chat" src={chat} alt="chat" href="./chat" />
                  </li>
                  <li className="nav-item">
                      <img className="chat" src={setting} alt="setting" href="./setting" />
                  </li>
                </ul>

              </div>
            </div>
          </nav>

      </Router>
    );
  }
}

export default Header;
