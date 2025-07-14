const { errorResponse } = require("../utils/responseHandler");
const User = require("../models/User");

async function checkUserExists(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return errorResponse(res, "User doesn't exist in database", {}, 404);
    }

    next();
  } catch (err) {
    console.error(err.message);
    errorResponse(res, "Server error", {}, 500);
  }
}

module.exports = checkUserExists;
