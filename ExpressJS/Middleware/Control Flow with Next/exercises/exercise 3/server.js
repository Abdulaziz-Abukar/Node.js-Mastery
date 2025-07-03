const express = require("express");
const app = express();
const cartRouter = require("./routers/cart");
const PORT = 3000;

app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Server started, listening at http://localhost:${PORT}`);
});
