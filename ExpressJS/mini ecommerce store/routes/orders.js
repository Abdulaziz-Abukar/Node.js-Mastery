const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res, next) => {
  res.send(`All orders for ${req.params.userId}`);
});

module.exports = router;
