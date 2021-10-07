const requestWithTimeout = require("./requestWithTimeout");

/**
 * Consolidates all fulfilled/resolved Promises which are returned by requestWithTimeout()
 * (no error handling for rejected Promises necessary)
 * @param {endpointConfig[]} endpoints - endpointConfigurations which are expected by Axios
 * @returns {fulfilledResponse[]}
 */
const requestMultiple = async (endpoints) => {
  const results = await Promise.allSettled(
    endpoints.map((endpointConfig) => requestWithTimeout(endpointConfig))
  );

  return results
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
};

module.exports = requestMultiple;
