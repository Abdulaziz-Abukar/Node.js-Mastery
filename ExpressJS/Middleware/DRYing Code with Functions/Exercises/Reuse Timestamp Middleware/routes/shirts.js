const express = require("express");
const router = express.Router();
const addTimeStamp = require("../timestampMiddleware");

router.use(addTimeStamp);

router.get("/", (req, res, next) => {
  res.send("All Shirts");
});

router.post("/", (req, res, next) => {
  const shirtBrand = req.body.brand;
  const shirtColor = req.body.color;

  if (!shirtBrand || !shirtColor) {
    res.status(400).send("Error, input fields not filled in.");
  } else {
    res
      .status(201)
      .send(`${shirtBrand} shirt with color ${shirtColor} added to system`);
  }
});

router.delete("/:id", (req, res) => {
  res.send(`shirt with ID ${req.params.id} deleted`);
});

module.exports = router;
