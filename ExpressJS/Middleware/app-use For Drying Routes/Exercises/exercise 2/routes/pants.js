const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All pants");
});

router.get("/:id", (req, res) => {
  const pantsID = req.params.id;

  res.send(`Viewing pants with ID ${pantsID}`);
});

router.delete("/:id", (req, res) => {
  const pantsID = req.params.id;
  res.send(`pants with ID ${pantsID} has been deleted.`);
});

module.exports = router;
