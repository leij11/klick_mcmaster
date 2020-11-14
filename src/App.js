import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Match from "./components/Profile";
import Discussion from "./components/Discussion";
import Analytics from "./components/Analytics";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path={"/Discussion"} component={Discussion} />
          <Route path={"/Match"} component={Match} />
          <Route path={"/Analytics"} component={Analytics} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
