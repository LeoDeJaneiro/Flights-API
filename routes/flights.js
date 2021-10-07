const express = require("express");
const router = express.Router();
const { requestFlights } = require("../utils/flights/getFlights");

router.get("/", async function (req, res, next) {
  try {
    const flightData = await requestFlights();
    res.json(flightData);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
