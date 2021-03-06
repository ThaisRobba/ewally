import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { StateProvider } from "./state";
import reducer from "./state/reducer";

import Login from "./pages/Login";
import Account from "./pages/Account";

import "./styles/reset.css";
import "./styles/style.css";

const App = () => {
  const initialState = {
    token: ""
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/account" component={Account} />
      </BrowserRouter>
    </StateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
