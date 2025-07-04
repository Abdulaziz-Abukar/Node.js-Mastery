const express = require("express");
const app = express();
const productsRouter = require("./routers/products");
const PORT = 3000;

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
