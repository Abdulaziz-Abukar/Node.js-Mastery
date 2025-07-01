const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const PORT = 3000;

function logger(req, res, next) {
  console.log(`[LOG] ${req.method} at ${req.path}`);
  next();
}

app.use(express.json());
app.use(logger);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
