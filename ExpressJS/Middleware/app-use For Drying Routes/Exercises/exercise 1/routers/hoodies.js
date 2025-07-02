const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All hoodies");
});

router.get("/:id", (req, res) => {
  const hoodieID = req.params.id;

  res.send(`Viewing hoodie ${hoodieID}`);
});

module.exports = router;
