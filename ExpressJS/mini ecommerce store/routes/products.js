const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "T-Shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 49.99 },
];

router.get("/", (req, res, next) => {
  res.type("text/plain");
  res.send(products.map((p) => p.name).join("\n"));
});

router.get("/:id", (req, res, next) => {
  const targetId = Number(req.params.id);
  const product = products.find((p) => p.id === targetId);

  if (product) {
    res.type("text/plain");
    res.send(product.name);
  } else {
    res.status(404).type("text/plain").send("Product not found");
  }
});

router.post("/", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res.status(400).send("Name and price required");
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).send(newProduct);
});

router.delete("/:id", (req, res, next) => {
  const targetId = Number(req.params.id);
  const index = products.findIndex((p) => p.id === targetId);

  if (index !== -1) {
    products.splice(index, 1); // remove item from array
    res.type("text/plain").send("Product deleted");
  } else {
    res.status(404).type("text/plain").send("Product not found");
  }
});

module.exports = router;
