const { validationResult } = require("express-validator");
const { errorResponse } = require("../utils/responseHandler");

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation failed", errors.array(), 422);
  }

  next();
}

module.exports = validateRequest;
