import axios from "axios";
import moxios from "moxios";

import postLogin from "./postLogin";

describe("Requests", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  test("should return a valid token", done => {
    let data;

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            token: "valid-token"
          }
        })
        .then(function() {
          expect(data.token).toBe("valid-token");
          done();
        });
    });

    postLogin("username", "password", res => {
      data = res.data;
    });
  });
});
