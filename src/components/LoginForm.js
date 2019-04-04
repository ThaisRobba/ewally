import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { useStateValue } from "../state";
import { SET_TOKEN } from "../state/actions";

import { API } from "../utils";

const handleSubmit = (e, history, dispatch, username, password) => {
  e.preventDefault();

  //Validation
  axios
    .post(`${API}/user/login`, {
      username,
      password
    })
    .then(res => {
      dispatch({
        type: SET_TOKEN,
        token: res.data.token
      });
      history.push("/account");
    })
    .catch(error => {
      // TODO: Add error handling
      console.log("Ooopsie.", error);
    });
};

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("testFrontEwally");
  const [password, setPassword] = useState("123456");
  const [, dispatch] = useStateValue();
  //TODO: Add feedback while request is being processed
  return (
    <form
      onSubmit={e => handleSubmit(e, history, dispatch, username, password)}
    >
      <label>
        Usuário(a):
        <input
          type="text"
          name="name"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Entrar" />
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(LoginForm);
