const express = require("express");
const router = express.Router();
const idGenerator = require("../utils/idGenerator");
const data = require("../data/mockData");

const { users } = data;

router.param("id", (req, res, next, id) => {
  const targetId = Number(id);

  const userTarget = users.find((user) => user.id === targetId);

  if (!userTarget) {
    return res.status(400).send("Error: UserID not found!");
  }

  req.userTarget = userTarget;
  next();
});

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  res.json(req.userTarget);
});

router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Error: missing input fields");
  }

  const newUser = {
    id: idGenerator(),
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json({
    message: "User created!",
    user: { newUser },
  });
});

router.delete("/:id", (req, res) => {
  const targetIndex = users.findIndex((user) => user.id === req.userTarget.id);

  if (targetIndex === -1) {
    return res.status("Error: error went past router param, use doesn't exist");
  }

  users.splice(targetIndex, 1);

  res.status(200).send("User deleted!");
});

module.exports = router;
