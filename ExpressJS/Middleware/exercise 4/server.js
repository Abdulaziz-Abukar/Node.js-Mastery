const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const PORT = 3000;

app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening on http://localhost:${PORT}`);
});
