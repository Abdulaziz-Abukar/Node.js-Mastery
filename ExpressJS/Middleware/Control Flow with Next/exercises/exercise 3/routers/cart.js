const express = require("express");
const router = express.Router();
const requestHandler = require("../utils/requestHandler");

router.use(requestHandler);

router.get("/", (req, res) => {
  res.send("Proceeding to checkout...");
});

module.exports = router;
