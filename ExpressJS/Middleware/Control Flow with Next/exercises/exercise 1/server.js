const express = require("express");
const app = express();
const adminRouter = require("./routers/admin");

const PORT = 3000;

app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
