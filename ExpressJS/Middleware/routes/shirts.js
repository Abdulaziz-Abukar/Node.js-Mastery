const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Shirts");
});

router.post(
  "/",
  (req, res, next) => {
    console.log("Creating shirt...");
    next();
  },
  (req, res) => {
    res.status(201).send("Shirt Created");
  }
);

router.delete("/:id", (req, res) => {
  res.send(`Shirt with ID ${req.params.id} deleted`);
});

module.exports = router;
