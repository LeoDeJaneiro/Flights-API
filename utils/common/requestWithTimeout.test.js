const requestWithTimeout = require("./requestWithTimeout");
const mockAxios = require("jest-mock-axios").default;
const { Cancel } = require("jest-mock-axios").default;

describe("requestWithTimeout", () => {
  const response = { data: "example response" };
  let thenFn;
  let catchFn;
  beforeEach(() => {
    thenFn = jest.fn();
    catchFn = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("cancels request after TIMEOUT", (done) => {
    const TIMEOUT = 100;
    const promise = requestWithTimeout({}, TIMEOUT).then(thenFn).catch(catchFn);

    setTimeout(async () => {
      mockAxios.mockResponse(response, undefined, true);
      await promise;
      expect(thenFn).not.toHaveBeenCalled();
      expect(catchFn).toHaveBeenCalledWith(expect.any(Cancel));
      done();
    }, TIMEOUT);
  });

  it("does not cancel request before TIMEOUT", (done) => {
    const TIMEOUT = 100;
    const promise = requestWithTimeout({}, TIMEOUT).then(thenFn).catch(catchFn);

    setTimeout(async () => {
      mockAxios.mockResponse(response, undefined, true);
      await promise;
      expect(thenFn).toHaveBeenCalledWith("example response");
      expect(catchFn).not.toHaveBeenCalled();
      done();
    }, TIMEOUT - 10);
  });

  it("propagates error", (done) => {
    const error = new Error("Host cannot be reached");
    const promise = requestWithTimeout({}).then(thenFn).catch(catchFn);
    mockAxios.mockError(error);

    setTimeout(async () => {
      mockAxios.mockResponse(response, undefined, true);
      await promise;
      expect(thenFn).not.toHaveBeenCalled();
      expect(catchFn).toHaveBeenCalledWith(error);
      done();
    }, 800);
  });
});
