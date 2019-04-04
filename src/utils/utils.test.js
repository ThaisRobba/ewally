import { getHeaderConfig } from ".";

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
