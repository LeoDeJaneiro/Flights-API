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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return result", async () => {
    const response = [{ id: 1 }, { id: 2 }, { id: 3 }];
    requestFlights.mockImplementation(jest.fn(() => response));
    const { body, status } = await request(router).get("/flights");
    expect(body).toEqual(response);
    expect(status).toEqual(200);
  });
  it("should return server error", async () => {
    const response = [{ id: 1 }, { id: 2 }, { id: 3 }];
    requestFlights.mockRejectedValue(new Error("error"));
    const { body, status } = await request(router).get("/flights");
    expect(status).toEqual(500);
  });
});
