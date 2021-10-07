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
 * Returns true if all values in the identityPaths from both params are equal.
 * @param {Object} flight1 - flight
 * @param {Object} flight2 - flight
 * @returns {boolean}
 */
const comparator = (flight1, flight2) =>
  identityPaths.every(
    (path) => _.get(flight1, path) === _.get(flight2, path, null)
  );

/**
 * Merges two flightSearchResponses and removes flight duplicates.
 * @param {Object} source1 - flightSearchResponse
 * @param {Object} source2 - flightSearchResponse
 * @returns {Object[]} - list of flights
 */
const consolidateFlights = (source1, source2) => {
  const flightList = _.get(source1, "flights", []);

  return _.chain(source2)
    .get("flights", [])
    .unionWith(flightList, comparator)
    .value();
};

/**
 * Requests flightSearchResponses from both endpoints and consolidates flights.
 * (assuming that flight duplicates only arise from a merge)
 * @returns {Object[]} - list of flights
 */
const requestFlights = async () => {
  const flightsRaw = await requestMultiple(endpoints);

  if (flightsRaw.length === 2) {
    return consolidateFlights(...flightsRaw);
  }
  if (flightsRaw.length === 1) {
    return _.chain(flightsRaw).first().get("flights", []).value();
  }
  return [];
};

module.exports = { requestFlights, consolidateFlights, comparator };
