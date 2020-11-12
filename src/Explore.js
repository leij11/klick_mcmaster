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

class Explore extends React.Component {
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

export default Explore;
