const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("All pants");
});

router.get("/:id", (req, res, next) => {
  const pantsID = req.params.id;

  res.send(`Pants with ID ${pantsID} retrieved`);
});

module.exports = router;
