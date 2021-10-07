const requestMultiple = require("./requestMultiple");
const requestWithTimeout = require("./requestWithTimeout");

jest.mock("./requestWithTimeout", () => jest.fn(() => []));

const mockPromise = (shouldResolve, timeout, value) => () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (shouldResolve ? resolve(value) : reject("error345")),
      timeout
    );
  });

describe("requestMultiple", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should filter fulfilled and map values", async () => {
    const value = "example";
    const value2 = "test";
    requestWithTimeout
      .mockImplementationOnce(jest.fn(mockPromise(true, 100, value)))
      .mockImplementationOnce(jest.fn(mockPromise(false, 80)));

    const result = await requestMultiple([value, value2]);
    expect(result).toEqual([value]);
  });
});
