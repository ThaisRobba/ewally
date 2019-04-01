import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./routes/Login";
import Account from "./routes/Account";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/account" component={Account} />
  </Router>,
  document.getElementById("root")
);
