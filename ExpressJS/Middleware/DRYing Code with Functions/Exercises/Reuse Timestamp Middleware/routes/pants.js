const express = require("express");
const router = express.Router();
const addTimeStamp = require("../timestampMiddleware");

router.use(addTimeStamp);

router.get("/", (req, res, next) => {
  res.send("All Pants");
});

router.post("/", (req, res, next) => {
  const pantsBrand = req.body.brand;
  const pantsColor = req.body.color;

  if (!pantsBrand || !pantsColor) {
    res.status(400).send("Error, input fields not filled in.");
  } else {
    res
      .status(201)
      .send(`${pantsBrand} pants with color ${pantsColor} added to system`);
  }
});

router.delete("/:id", (req, res) => {
  res.send(`pants with ID ${req.params.id} deleted`);
});
module.exports = router;
