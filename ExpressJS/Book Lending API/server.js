const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const PORT = 3000;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/users/:userId/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening @ http://localhost:${PORT}`);
});
