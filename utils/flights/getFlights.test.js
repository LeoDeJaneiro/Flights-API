const { source1, source2, result } = require("./__mocks/flights");
const {
  requestFlights,
  consolidateFlights,
  comparator,
} = require("./getFlights");

const requestMultiple = require("../common/requestMultiple");

jest.mock("../common/requestMultiple", () => jest.fn(() => []));

describe("getFlights", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("comparator", () => {
    it("should find equality", () => {
      expect(
        comparator(
          {
            slices: [
              {
                departure_date_time_utc: "2019-08-08T04:30:00.000Z",
                flight_number: "144",
              },
              {
                departure_date_time_utc: "2019-08-10T06:50:00.000Z",
                flight_number: "145",
              },
            ],
          },
          {
            slices: [
              {
                departure_date_time_utc: "2019-08-08T04:30:00.000Z",
                flight_number: "144",
              },
              {
                departure_date_time_utc: "2019-08-10T06:50:00.000Z",
                flight_number: "145",
              },
            ],
          }
        )
      ).toBeTruthy();
    });
    it("should find inequality", () => {
      expect(
        comparator(
          {
            slices: [
              {
                departure_date_time_utc: "2019-08-08T04:30:00.000Z",
                flight_number: "146",
              },
              {
                departure_date_time_utc: "2019-08-10T06:50:00.000Z",
                flight_number: "145",
              },
            ],
          },
          {
            slices: [
              {
                departure_date_time_utc: "2019-08-08T04:30:00.000Z",
                flight_number: "144",
              },
              {
                departure_date_time_utc: "2019-08-10T06:50:00.000Z",
                flight_number: "145",
              },
            ],
          }
        )
      ).toBeFalsy();
    });
    it("should return false on undefined values", () => {
      expect(
        comparator(
          {
            slices: [
              {
                date_time_utc: "2019-08-08T04:30:00.000Z",
              },
              {
                date_time_utc: "2019-08-10T06:50:00.000Z",
              },
            ],
          },
          {
            slices: [
              {
                date_time_utc: "2019-08-08T04:30:00.000Z",
              },
              {
                date_time_utc: "2019-08-08T04:30:00.000Z",
              },
            ],
          }
        )
      ).toBeFalsy();
    });
  });

  describe("consolidateFlights", () => {
    it("should merge and remove duplicates", () => {
      expect(consolidateFlights(source1, source2)).toEqual(result);
    });
  });

  describe("requestFlights", () => {
    it("should consolidate", async () => {
      requestMultiple.mockImplementation(() => [source1, source2]);
      const flights = await requestFlights();
      expect(flights).toEqual(result);
    });
    it("should unpack", async () => {
      requestMultiple.mockImplementation(() => [source1]);
      const flights = await requestFlights();
      expect(flights).toEqual(source1.flights);
    });
    it("should return empty list", async () => {
      requestMultiple.mockImplementation(() => []);
      const flights = await requestFlights();
      expect(flights).toEqual([]);
    });
  });
});
