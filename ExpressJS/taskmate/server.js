const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use("/users", usersRouter);
app.use("/users/:userId/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
