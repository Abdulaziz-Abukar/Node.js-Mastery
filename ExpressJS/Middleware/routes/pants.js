const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Pants");
});

router.post("/", (req, res) => {
  res.status(201).send("Pants created");
});

router.delete("/:id", (req, res) => {
  res.send(`Pants with ID ${req.params.id} deleted`);
});

module.exports = router;
