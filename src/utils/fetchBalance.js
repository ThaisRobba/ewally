import axios from "axios";

import { API, getHeaderConfig } from ".";

const fetchBalance = (token, onSucess, onError) => {
  axios
    .get(`${API}/account/balance`, getHeaderConfig(token))
    .then(onSucess)
    .catch(error => (typeof onError === "function" ? onError(error) : null));
};

export default fetchBalance;
