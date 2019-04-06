import axios from "axios";
import moxios from "moxios";

import getStatement from "./getStatement";

describe("Requests", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  test("should return the correct structure", done => {
    let data;

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            statement: [
              {
                id: 44494,
                accountName: "84251309000144",
                amount: 26623,
                balance: 26623,
                createdAt: "2019-01-04T09:50:16.000Z",
                operationType: "RECEIVED_TRANSFERENCE",
                status: "COMPLETED",
                otherInfo: {
                  otherAccountName: "52086828853",
                  userLatitude: -23.62393516705907,
                  userLongitude: -46.6971381739045
                }
              },
              {
                id: 44495,
                accountName: "84251309000144",
                amount: -25362,
                balance: 1261,
                createdAt: "2019-01-05T09:50:16.000Z",
                operationType: "SENT_TRANSFERENCE",
                status: "COMPLETED",
                otherInfo: {
                  otherAccountName: "52086828853",
                  transactionCategoryId: 1,
                  userLatitude: -23.62393516705907,
                  userLongitude: -46.6971381739045
                }
              }
            ]
          }
        })
        .then(function() {
          expect(data.statement[1].id).toBe(44495);
          expect(data.statement[1].balance).toBe(1261);
          expect(data.statement[0].id).toBe(44494);
          expect(data.statement[0].balance).toBe(26623);
          done();
        });
    });

    getStatement("validToken", "2019-01-04", "2019-01-05", res => {
      data = res.data;
    });
  });
});
