import { SET_TOKEN } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.token };
    default:
      return state;
  }
};

export default reducer;
