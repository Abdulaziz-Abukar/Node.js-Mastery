const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "abdul", email: "abdul@email.com" },
  { id: 2, name: "hassan", email: "hassan@email.com" },
];

router.param("id", (req, res, next, id) => {
  const user = users.find((u) => u.id === parseInt(id));

  console.log("Router param used!");
  if (!user) return res.status(404).send("User not found");
  req.user = user;
  next();
});

router.get("/", (req, res, next) => {
  res.type("text/plain");
  res.send(users.map((user) => user.name).join("\n"));
});

router.get("/:id", (req, res, next) => {
  res.type("text/plain").send(`User found: ${req.user.name}`);
});

router.post("/", (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Missing input fields for name or email");
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).send("User successfully added!");
});

router.delete("/:id", (req, res, next) => {
  const userIndex = users.findIndex((user) => user.id === req.user.id);

  users.splice(userIndex, 1);
  res.type("text/plain");
  res.json({ message: "User deleted", user: req.user });
});

module.exports = router;
