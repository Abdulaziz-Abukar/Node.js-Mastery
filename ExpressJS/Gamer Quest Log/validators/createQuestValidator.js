const { body } = require("express-validator");

const createQuestValidator = [
  body("title").notEmpty().withMessage("Quest must have a title"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("xpReward")
    .optional()
    .isInt({ min: 0 })
    .withMessage("XP reward must be a positive integer"),

  body("status")
    .optional()
    .isIn(["not started", "in progress", "completed"])
    .withMessage("Status must be one of: not started, in progress, completed"),
];

module.exports = { createQuestValidator };
