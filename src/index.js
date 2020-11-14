import Header from './Header'
import Profile from './Profile';
import Explore from './Explore';
import ExploreSetting from './ExploreSetting';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from 'react-modal';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.css";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Profile />
  </React.StrictMode>,
  document.getElementById("root")
);
