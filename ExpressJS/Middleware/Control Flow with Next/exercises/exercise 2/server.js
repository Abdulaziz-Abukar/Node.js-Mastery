const express = require("express");
const app = express();
const profileRouter = require("./routers/profile");
const PORT = 3000;

app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
