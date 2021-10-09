const _ = require("lodash");

const endpoints = require("./endpoints");
const requestMultiple = require("../common/requestMultiple");

const identityPaths = [
  "slices[0].flight_number",
  "slices[1].flight_number",
  "slices[0].departure_date_time_utc",
  "slices[1].departure_date_time_utc",
];

/**
 * Returns true if all values in the identityPaths from both parameters are equal.
 * @param {Object} flight1 - flight
 * @param {Object} flight2 - flight
 * @returns {boolean}
 */
const comparator = (flight1, flight2) =>
  identityPaths.every(
    (path) => _.get(flight1, path) === _.get(flight2, path, null)
  );

/**
 * Merges two flights and removes duplicates.
 * @param {Object} flight1 - flight
 * @param {Object} flight2 - flight
 * @returns {Object[]} - list of flights
 */
const consolidateFlights = (flight1, flight2) =>
  _.unionWith(flight1, flight2, comparator);

/**
 * Requests flightSearchResponses from the endpoints and consolidates flights for one or two sources.
 * (assuming that flight duplicates only arise from a merge)
 * @returns {Promise<Object>} - list of flights and list of flight sources
 */
const requestFlights = async () => {
  const flightsRaw = await requestMultiple(endpoints);
  const sources = flightsRaw.map(({ source }) => source);
  const flights = flightsRaw.map((flightRaw) =>
    _.get(flightRaw, ["value", "flights"], [])
  );

  if (flightsRaw.length === 2) {
    return {
      flights: consolidateFlights(...flights),
      sources,
    };
  }
  if (flightsRaw.length === 1) {
    return {
      flights: _.first(flights),
      sources,
    };
  }
  return {
    flights: [],
    sources,
  };
};

module.exports = { requestFlights, consolidateFlights, comparator };
