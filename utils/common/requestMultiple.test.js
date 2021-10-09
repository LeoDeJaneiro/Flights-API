const requestMultiple = require("./requestMultiple");
const requestWithTimeout = require("./requestWithTimeout");

jest.mock("./requestWithTimeout", () => jest.fn(() => []));

const mockPromise = (shouldResolve, timeout, endpoint) => () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (shouldResolve ? resolve(endpoint) : reject("error345")),
      timeout
    );
  });

describe("requestMultiple", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should map ids and filter fulfilled", async () => {
    const endpoint = { id: "example" };
    const endpoint2 = { id: "test" };
    requestWithTimeout
      .mockImplementationOnce(jest.fn(mockPromise(true, 100, endpoint)))
      .mockImplementationOnce(jest.fn(mockPromise(false, 80)));

    const result = await requestMultiple([endpoint, endpoint2]);
    expect(result).toEqual([
      {
        source: endpoint.id,
        status: "fulfilled",
        value: endpoint,
      },
    ]);
  });
});
