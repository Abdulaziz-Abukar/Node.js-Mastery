const express = require("express");
const router = express.Router();
const shirtsLogger = require("../utils/shirtsLogger");

router.use(shirtsLogger);

router.get("/", (req, res) => {
  res.send("All shirts");
});

router.get("/:id", (req, res) => {
  const shirtID = req.params.id;

  res.send(`Viewing shirt with ID ${shirtID}`);
});

router.delete("/:id", (req, res) => {
  const shirtID = req.params.id;
  res.send(`Shirt with ID ${shirtID} has been deleted.`);
});

module.exports = router;
