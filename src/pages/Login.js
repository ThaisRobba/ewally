import React from "react";
import LoginForm from "../components/LoginForm";

import Background from "../components/Background";
import Modal from "../components/Modal";
import Logo from "../components/Logo";

const Login = () => (
  <Background color="#00a1b6">
    <Modal>
      <Logo />
      <LoginForm />
    </Modal>
  </Background>
);

export default Login;
