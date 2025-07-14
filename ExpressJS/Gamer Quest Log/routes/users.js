const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { createUserValidator } = require("../validators/createUserValidator");
const validateRequest = require("../middleware/validateRequests");
const {
  successResponse,
  createdResponse,
  errorResponse,
} = require("../utils/responseHandler");

router.param("id", async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return errorResponse(res, "User not found", {}, 404);
    }

    req.user = user;
    next();
  } catch (err) {
    console.err(err.message);
    return errorResponse(res, "Invalid User ID", {}, 400);
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean(); // returns all users

    if (users.length === 0) {
      return errorResponse(res, "No users found", {}, 404);
    }

    return successResponse(res, "Users retrieved successfully", users);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

router.get("/:id", async (req, res) => {
  return successResponse(res, "User retrieved successfully", req.user);
});

router.post("/", createUserValidator, validateRequest, async (req, res) => {
  const { username, email, level, xp } = req.body;

  try {
    const newUser = await User.create({ username, email, level, xp });
    return createdResponse(res, "User created!", newUser);
  } catch (err) {
    return errorResponse(res, "Server Error", {}, 500);
  }
});

router.put("/:id", createUserValidator, validateRequest, async (req, res) => {
  const { id } = req.params;
  const { username, email, level, xp } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { username, email, level, xp },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return errorResponse(res, "User not found", {}, 404);
    }

    return successResponse(res, "User updated successfully", updatedUser);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await req.user.deleteOne();
    return successResponse(res, "User deleted!", req.user);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

module.exports = router;
