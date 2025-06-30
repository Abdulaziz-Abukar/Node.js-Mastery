const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/users");
const productsRoute = require("./routes/products");

app.use("/users", userRoutes);
app.use("/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
