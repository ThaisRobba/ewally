import { getHeaderConfig, createDateRangeByDays } from ".";

describe("Header config", () => {
  const tokenSample = "abc123";

  const configSample = {
    headers: {
      Authorization: `Bearer ${tokenSample}`
    }
  };

  test("should have a header and authorization structure", () => {
    const config = getHeaderConfig(tokenSample);
    expect(config).toEqual(configSample);
  });

  test("should have a token", () => {
    const config = getHeaderConfig(tokenSample);
    expect(config.headers.Authorization).toBe(`Bearer ${tokenSample}`);
  });
});

describe("createDayRangeByDays", () => {
  const earlierDate = "2019-01-01";
  const laterDate = "2019-01-31";

  test("should create an array with one entry per day (inclusive)", () => {
    const days = createDateRangeByDays(earlierDate, laterDate);

    expect(days.length).toBe(31);
  });

  test("should not create reversed ranges", () => {
    const days = createDateRangeByDays(laterDate, earlierDate);

    expect(days.length).toBe(0);
  });
});
