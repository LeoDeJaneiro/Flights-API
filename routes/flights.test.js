const express = require("express");
const request = require("supertest");

const { requestFlights } = require("../utils/flights/getFlights");
const serverRoutes = require("./flights");

const router = express();
router.use("/flights", serverRoutes);

jest.mock("../utils/flights/getFlights", () => ({
  requestFlights: jest.fn(() => []),
}));

describe("GET /flights", () => {
  const response = [{ id: 1 }, { id: 2 }, { id: 3 }];
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with payload and header", async () => {
    requestFlights.mockImplementation(
      jest.fn(() => ({
        flights: response,
        sources: ["source1", "source2"],
      }))
    );
    const { body, status, headers } = await request(router).get("/flights");
    expect(body).toEqual(response);
    // key "x-flight_sources" matches X-flight_sources
    expect(headers["x-flight_sources"]).toEqual("source1,source2");
    expect(status).toEqual(200);
  });

  it("should return server error", async () => {
    requestFlights.mockRejectedValue(new Error("error"));
    const { status } = await request(router).get("/flights");
    expect(status).toEqual(500);
  });
});
