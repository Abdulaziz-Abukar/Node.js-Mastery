const express = require("express");
const app = express();
const PORT = 3000;

// import routes
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

// Parse Json Body
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Method: ${req.method} | Path: ${req.path}`);
  next();
});
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/users/:userId/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
