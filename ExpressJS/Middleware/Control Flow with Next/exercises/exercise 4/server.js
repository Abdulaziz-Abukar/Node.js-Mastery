const express = require("express");
const app = express();
const triggerErrorRouter = require("./routers/trigger-error");
const PORT = 3000;

app.use("/trigger-error", triggerErrorRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
