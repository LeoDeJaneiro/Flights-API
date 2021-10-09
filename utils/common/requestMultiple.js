const _ = require("lodash");
const requestWithTimeout = require("./requestWithTimeout");

/**
 * Returns all resolved Promises which have been returned by requestWithTimeout() with appended endpoint IDs
 * @param {Object[]} endpoints - List of endpointConfigurations
 * @returns {Promise<Object[]>} - fulfilled response data with appended endpoint IDs (as 'source')
 */
const requestMultiple = async (endpoints) => {
  const results = await Promise.allSettled(
    endpoints.map(({ id, ...endpointConfig }) =>
      requestWithTimeout(endpointConfig)
    )
  );

  return results
    .map((result, index) => ({
      ...result,
      source: _.chain(endpoints).nth(index).get("id").value(),
    }))
    .filter(({ status }) => status === "fulfilled");
};

module.exports = requestMultiple;
