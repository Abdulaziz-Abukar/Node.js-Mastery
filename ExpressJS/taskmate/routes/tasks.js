const express = require("express");
const router = express.Router({ mergeParams: true });
const idGenerator = require("../utils/idGenerator");

router.get("/", (req, res) => {
  console.log(req.params.userId);
  res.send("All tasks from user: " + req.params.userId);
});

module.exports = router;
