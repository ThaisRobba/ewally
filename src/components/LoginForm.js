import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { useStateValue } from "../state";
import { SET_TOKEN } from "../state/actions";
import postLogin from "../utils/postLogin";

import Label from "./Label";
import InputField from "./InputField";
import LargeButton from "./LargeButton";
import Spinner from "./Spinner";
import BubbleError from "./BubbleError";

const showError = error => {
  return <BubbleError>{error.message}</BubbleError>;
};

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWaitingRequest, setIsWaitingRequest] = useState(false);
  const [currentError, setCurrentError] = useState(null);
  const [, dispatch] = useStateValue();

  const handleSubmit = e => {
    e.preventDefault();
    setIsWaitingRequest(true);
    setCurrentError(null);

    postLogin(
      username,
      password,
      res => {
        setIsWaitingRequest(false);
        dispatch({
          type: SET_TOKEN,
          token: res.data.token
        });
        history.push("/account");
      },
      error => {
        setIsWaitingRequest(false);
        setCurrentError(error);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentError !== null ? showError(currentError) : null}
      <Label htmlFor="name">Usuário(a)</Label>
      <InputField
        disabled={isWaitingRequest}
        type="text"
        name="name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <Label htmlFor="password">Senha</Label>
      <InputField
        disabled={isWaitingRequest}
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <LargeButton
        margin="18px 0 0 0"
        type="submit"
        disabled={isWaitingRequest}
      >
        {isWaitingRequest ? <Spinner margin="auto" size="3" /> : "Entrar"}
      </LargeButton>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(LoginForm);
