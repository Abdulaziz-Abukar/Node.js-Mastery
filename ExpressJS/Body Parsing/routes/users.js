const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users.");
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    res
      .status(400)
      .send("Name and email are required. one or both fields are unfilled.");
  } else {
    res.status(201).send(`User ${name} registered with email ${email}`);
  }
  console.log(req.body);
});

router.delete("/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});

module.exports = router;
