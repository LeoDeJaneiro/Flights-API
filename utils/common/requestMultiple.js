const requestWithTimeout = require("./requestWithTimeout");

/**
 * Consolidates all fulfilled/resolved Promises which are returned by requestWithTimeout()
 * (no error handling for rejected Promises necessary)
 * @param {Object[]} endpoints - List of endpointConfigurations which are expected by Axios
 * @returns {Object[]} - fulfilled response data
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
