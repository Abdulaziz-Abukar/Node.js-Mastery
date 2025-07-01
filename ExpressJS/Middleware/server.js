const express = require("express");
const app = express();
const PORT = 3000;

const shirtsRouter = require("./routes/shirts");
const pantsRouter = require("./routes/pants");

// GLOBAL LOGGER: MIDDLEWARE
app.use((req, res, next) => {
  console.log(`Method: ${req.method} | Path: ${req.path}`);
  next();
});
app.use("/shirts", shirtsRouter);
app.use("/pants", pantsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
