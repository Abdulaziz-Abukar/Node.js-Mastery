const express = require("express");
const router = express.Router({ mergeParams: true });
const data = require("../data/mockData");
const idGenerator = require("../utils/idGenerator");

const { users, userBooks } = data;

router.get("/", (req, res) => {
  const userId = req.params.userId;

  const userBook = userBooks[userId];

  if (!userBook) {
    return res.status(400).send("That userID does not exist.");
  }

  res.json(userBook);
});

router.post("/", (req, res, next) => {
  const userId = req.params.userId;
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Error, missing title field");
  }

  if (!userBooks[userId]) {
    userBooks[userId] = [];
  }

  const newBook = {
    id: idGenerator(),
    title,
  };

  userBooks[userId].push(newBook);

  res.status(201).json({
    message: "Book added!",
    book: newBook,
  });
});

module.exports = router;
