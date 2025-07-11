const express = require("express");
const router = express.Router();
const idGenerator = require("../utils/idGenerator");

router.get("/", (req, res) => {
  res.send("All users");
});

module.exports = router;
