const express = require("express");
const router = express.Router();
const data = require("../data/mockData");
const idGenerator = require("../utils/idGenerator");

const { users } = data;

router.param("id", (req, res, next, id) => {
  const targetId = Number(id);

  const found = users.find((user) => user.id === targetId);

  if (!found) {
    return res.status(400).send("This id doesn't exist in the database");
  }
  req.user = found;
  next();
});

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  res.json(req.user);
});

router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Error, one or more fields missing.");
  }

  const newUser = {
    id: idGenerator(),
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({ message: "User created!", user: newUser });
});

router.delete("/:id", (req, res) => {
  const targetIndex = users.findIndex((user) => user.id === req.user.id);

  users.splice(targetIndex, 1);

  res.status(200).send("User deleted!");
});
module.exports = router;
