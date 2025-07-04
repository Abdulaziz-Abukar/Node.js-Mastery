const express = require("express");
const app = express();
const morgan = require("morgan");
const shirtsRouter = require("./routers/shirts");
const pantsRouter = require("./routers/pants");
const hoodiesRouter = require("./routers/hoodies");
const PORT = 3000;

app.use(morgan("combined"));
app.use("/shirts", shirtsRouter);
app.use("/pants", pantsRouter);
app.use("/hoodies", hoodiesRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
