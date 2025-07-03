const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const err = new Error("Something went wrong in /trigger-error");
  next(err);
});

router.use((err, req, res, next) => {
  console.log("ERROR: ", err.message);
  res.status(500).send("Server Error: " + err.message);
});

module.exports = router;
