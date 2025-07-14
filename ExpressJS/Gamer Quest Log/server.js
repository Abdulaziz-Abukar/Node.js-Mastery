const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

const userRouter = require("./routes/users");
const questRouter = require("./routes/quests");
const PORT = 3000;

connectDB();
app.use(express.json());
app.use(morgan("combined"));

app.use("/users", userRouter);
app.use("/users/:userId/quests", questRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
