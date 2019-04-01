import React, { useState } from "react";

const handleSubmit = (username, password) => {
  //Validation
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={() => handleSubmit(username, password)}>
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

export default LoginForm;
