const express = require("express");
const router = express.Router();

const adminChecker = require("../utils/adminChecker");
router.use(adminChecker);
router.get("/", (req, res) => {
  res.send("Welcome, admin");
});

module.exports = router;
