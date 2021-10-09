const express = require("express");
const router = express.Router();
const { requestFlights } = require("../utils/flights/getFlights");

router.get("/", async function (req, res, next) {
  try {
    const { flights, sources } = await requestFlights();
    res.header("X-flight_sources", [sources.join(",")]).json(flights);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
