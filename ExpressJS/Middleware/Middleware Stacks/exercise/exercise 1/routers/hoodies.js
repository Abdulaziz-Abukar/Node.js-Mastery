const express = require("express");
const router = express.Router();
const { logger, fakeAuth, validateQuery } = require("../utils/util");

const stack = [logger, fakeAuth, validateQuery];
router.get("/", stack, (req, res, next) => {
  res.send("All hoodies");
});

module.exports = router;
