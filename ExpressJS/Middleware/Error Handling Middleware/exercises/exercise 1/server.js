const express = require("express");
const app = express();
const PORT = 3000;

app.get("/shirts", (req, res, next) => {
  throw new Error("Something went wrong.");
});

app.get("/fail", (req, res, next) => {
  next(new Error("This is a forced error"));
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.use((err, req, res, next) => {
  console.error("ERROR: ", err.message);
  res.status(500).send("Server Error: " + err.message);
});
