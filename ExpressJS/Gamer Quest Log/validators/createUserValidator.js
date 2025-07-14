const { body } = require("express-validator");

const createUserValidator = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email"),

  body("level")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Level must be a positive integer"),

  body("xp")
    .optional()
    .isInt({ min: 0 })
    .withMessage("XP must be a non-negative integer"),
];

module.exports = { createUserValidator };
