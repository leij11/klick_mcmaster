import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header'
import Profile from './Profile';
import Explore from './Explore';
import Settings from './Settings';
import ExploreSetting from './ExploreSetting';

import Modal from 'react-modal';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ExploreSetting />
  </React.StrictMode>,
  document.getElementById('root')
);
