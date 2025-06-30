const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Products.");
});

router.post("/", (req, res) => {
  res.status(201).send("Product added");
});

router.delete("/:id", (req, res) => {
  res.send(`Product ${req.params.id} removed`);
});

module.exports = router;
