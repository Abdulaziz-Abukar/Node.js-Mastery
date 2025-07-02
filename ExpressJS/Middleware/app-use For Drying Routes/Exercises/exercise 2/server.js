const express = require("express");
const app = express();
const shirtsRouter = require("./routes/shirts");
const pantsRouter = require("./routes/pants");
const PORT = 3000;

app.use("/api/v1/shirts", shirtsRouter);
app.use("/api/v1/pants", pantsRouter);

app.listen(PORT, () => {
  console.log(`Server started, listen at http://localhost:${PORT}`);
});
