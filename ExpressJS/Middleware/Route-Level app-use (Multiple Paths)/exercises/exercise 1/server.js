const express = require("express");
const app = express();
const shirtsRouter = require("./routers/shirts");
const pantsRouter = require("./routers/pants");
const hoodiesRouter = require("./routers/hoodies");
const logger = require("./utils/logger");
const alternateLogger = require("./utils/alternateLogger");
const PORT = 3000;

const sharedPaths = ["/shirts", "/pants", "/hoodies"];
app.use(sharedPaths, alternateLogger);

app.use("/shirts", shirtsRouter);
app.use("/pants", pantsRouter);
app.use("/hoodies", hoodiesRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
