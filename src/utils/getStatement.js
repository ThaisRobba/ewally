import axios from "axios";
import { API, getHeaderConfig } from ".";

const getStatement = (token, start, end, onSuccess, onError) => {
  axios
    .get(
      `${API}/b2b/statement?initialDate=${start}&finalDate=${end}`,
      getHeaderConfig(token)
    )
    .then(onSuccess)
    .catch(onError);
};

export default getStatement;
