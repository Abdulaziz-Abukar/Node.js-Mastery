const express = require("express");
const router = express.Router();
const profileLogger = require("../utils/profileLogger");
const nameChecker = require("../utils/nameChecker");

// router.use(profileLogger);
// router.use(nameChecker);

router.get("/", profileLogger, nameChecker, (req, res, next) => {
  res.send(`Welcome ${req.query.name}`);
});

module.exports = router;
