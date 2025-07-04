const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("All shirts");
});

router.get("/:id", (req, res, next) => {
  const shirtID = req.params.id;

  res.send(`Shirt with ID ${shirtID} retrieved`);
});

module.exports = router;
