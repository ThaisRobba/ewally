import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { useStateValue } from "../state";
import { SET_TOKEN } from "../state/actions";
import postLogin from "../utils/postLogin";

import Label from "./Label";
import InputField from "./InputField";
import LargeButton from "./LargeButton";

const handleSubmit = (e, history, dispatch, username, password) => {
  e.preventDefault();

  postLogin(username, password, res => {
    dispatch({
      type: SET_TOKEN,
      token: res.data.token
    });
    history.push("/account");
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
      <Label for="name">Usuário(a)</Label>
      <InputField
        type="text"
        name="name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <Label for="password">Senha</Label>
      <InputField
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <LargeButton margin="18px 0 0 0" type="submit">
        Entrar
      </LargeButton>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(LoginForm);
