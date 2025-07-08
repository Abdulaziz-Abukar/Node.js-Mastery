const express = require("express");
const router = express.Router({ mergeParams: true });

let userOrders = {
  1: [{ id: 1, item: "Shoes" }],
  2: [{ id: 1, item: "Hat" }],
};

router.use((req, res, next) => {
  const targetId = parseInt(req.params.userId);

  if (!targetId) {
    return res.send("Error, that is not a number id");
  }
  req.userId = targetId;
  next();
});

router.get("/", (req, res, next) => {
  const orders = userOrders[req.userId] || [];

  if (!orders) {
    return res.status(404).send("No orders found for this user");
  }

  res.json(orders);
});

router.post("/", (req, res, next) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).send("Item is required");
  }

  // If this user has no orders yet, start their array
  if (!userOrders[req.userId]) {
    userOrders[req.userId] = [];
  }

  const newOrder = {
    id: userOrders[req.userId].length + 1,
    item,
  };

  userOrders[req.userId].push(newOrder);

  res.status(201).json(newOrder);
});

module.exports = router;
