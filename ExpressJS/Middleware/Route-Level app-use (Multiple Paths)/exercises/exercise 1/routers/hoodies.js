const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("All hoodies");
});

router.get("/:id", (req, res, next) => {
  const hoodieID = req.params.id;

  res.send(`hoodie with ID ${hoodieID} retrieved`);
});

module.exports = router;
