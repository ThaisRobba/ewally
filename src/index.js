import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

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
        <Route exact path="/" component={Login} />
        <Route exact path="/account" component={Account} />
      </BrowserRouter>
    </StateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
