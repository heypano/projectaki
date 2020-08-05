import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/en/:word?" children={<App language="en" />} />
        <Route exact path="/gr/:word?" children={<App language="gr" />} />
        <Route exact path="/:word?" children={<App language="gr" />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
