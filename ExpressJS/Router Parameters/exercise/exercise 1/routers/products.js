const express = require("express");
const router = express.Router();

// Router params
router.param("id", (req, res, next, id) => {
  console.log(`Product ID: ${id} accessed`);
  req.id = id;
  next();
});

// Router endpoints
router.get("/:id", (req, res) => {
  res.send(`Viewing product with ID ${req.id}`);
});

module.exports = router;
