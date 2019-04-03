import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StateProvider } from "./state";
import reducer from "./reducer";

import Login from "./pages/Login";
import Account from "./pages/Account";

const App = () => {
  const initialState = {
    token: ""
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/account" component={Account} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
