import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Discussion from "./components/Discussion";
import Analytics from "./components/Analytics";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path={"/Discussion"} component={Discussion} />
          <Route path={"/Profile"} component={Profile} />
          <Route path={"/Analytics"} component={Analytics} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
