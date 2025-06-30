const express = require("express");
const app = express();
const PORT = 3000;

// Exercise 1 route
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

// Exercise 2 route
app.get("/product/:name", (req, res) => {
  res.send(`Product name is ${req.params.name}`);
});

// Exercise 3 route
app.get("/search/:term", (req, res) => {
  res.status(200).send(`You searched for ${req.params.term}`);
});

// Exercise 4 route
app.get("/search", (req, res) => {
  const term = req.query.term;
  const category = req.query.category;

  res.send(`Searching for ${term} in ${category} clothing`);
});

// Exercise 5 route
app.post("/users", (req, res) => {
  res.status(201).send("User created!");
});

app.delete("/users/:id", (req, res) => {
  const userToDelete = req.params.id;
  res.send(`User with ID ${userToDelete} deleted`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
