const express = require("express");
const app = express();
const shirtsRouter = require("./routes/shirts");
const pantsRouter = require("./routes/pants");
const PORT = 3000;

app.use(express.json());
app.use("/shirts", shirtsRouter);
app.use("/pants", pantsRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
