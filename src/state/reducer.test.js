import { SET_TOKEN } from "./actions";
import reducer from "./reducer";

describe("Reducers", () => {
  const sampleToken = "abc123";

  test("should correctly setup token", () => {
    const initialState = { token: "" };

    const updatedState = reducer(initialState, {
      type: SET_TOKEN,
      token: sampleToken
    });

    expect(updatedState.token).toBe(sampleToken);
    expect(updatedState.token).not.toBe(initialState.token);
  });
});
