import axios from "axios";
import moxios from "moxios";

import fetchBalance from "./fetchBalance";

describe("Requests", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  test("should return a valid amount", done => {
    let data;

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            balance: 1000
          }
        })
        .then(function() {
          expect(data.balance).toBe(1000);
          done();
        });
    });

    fetchBalance("validToken", res => {
      data = res.data;
    });
  });
});
