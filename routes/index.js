const express = require("express");
const router = express.Router();

const movieRoute = require("./screening-route");

router.use("/screening", movieRoute);

module.exports = router;
