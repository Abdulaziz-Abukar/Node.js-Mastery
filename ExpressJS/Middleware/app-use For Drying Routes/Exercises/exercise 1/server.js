const express = require("express");
const app = express();
const hoodiesRouter = require("./routers/hoodies");
const PORT = 3000;

app.use("/hoodies", hoodiesRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
