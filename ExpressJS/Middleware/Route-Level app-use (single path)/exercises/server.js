const express = require("express");
const app = express();
const PORT = 3000;

function adminChecker(req, res, next) {
  if (req.query.admin !== "true") {
    return res.status(403).send("Admins only.");
  }
  next();
}

function productRequests(_, _, next) {
  console.log("Product route hit");
  next();
}

app.use("/admin", adminChecker);
app.use("/products", productRequests);

app.get("/admin", (req, res) => {
  res.send("Welcome to the admin dashboard");
});

app.get("/products/:id", (req, res) => {
  const productID = req.params.id;
  res.send(`Product ID: ${productID}`);
});

app.listen(PORT, () => {
  console.log(`Server started, listening on http://localhost:${PORT}`);
});
