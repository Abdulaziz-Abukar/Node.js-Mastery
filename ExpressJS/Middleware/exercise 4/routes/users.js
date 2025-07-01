const express = require("express");
const router = express.Router();

function logger(method, path) {
  console.log(`Method: ${method}, Path: ${path}`);
}

router.get(
  "/",
  (req, res, next) => {
    logger(req.method, req.path);
    next();
  },
  (req, res, next) => {
    req.user = "Abdulaziz";
    res.send(`Hello, ${req.user}`);
  }
);

module.exports = router;
