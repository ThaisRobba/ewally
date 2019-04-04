import axios from "axios";

import { API } from ".";

const fetchBalance = (username, password, onSucess, onError) => {
  axios
    .post(`${API}/user/login`, {
      username,
      password
    })
    .then(onSucess)
    .catch(error => (typeof onError === "function" ? onError(error) : null));
};

export default fetchBalance;
