const express = require("express");
const app = express();
const PORT = 3000;

const shirtsRouter = require("./routes/shirts");
const pantsRouter = require("./routes/pants");

// GLOBAL LOGGER: MIDDLEWARE with timestmap
app.use((req, res, next) => {
  req.timestamp = new Date().toISOString();
  console.log(
    `TimeStamp: ${req.timestamp} Method: ${req.method} | Path: ${req.path}`
  );
  next();
});

// exercise 2: Block route to /blocked
app.use((req, res, next) => {
  if (req.path === "/blocked") {
    res.status(403).send("Access to this route is blocked");
  }
  next();
});

app.use("/shirts", shirtsRouter);
app.use("/pants", pantsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
