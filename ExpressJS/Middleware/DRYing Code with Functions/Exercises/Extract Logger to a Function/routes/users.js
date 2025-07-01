const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all users");
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    res.status(400).send("Error, user did not fill in all fields");
  } else {
    res
      .status(201)
      .send(`User with name ${name} registered with email ${email}`);
  }
});

router.delete("/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});

module.exports = router;
