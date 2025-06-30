const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users.");
});

router.post("/", (req, res) => {
  res.status(201).send("User created");
});

router.delete("/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

module.exports = router;
