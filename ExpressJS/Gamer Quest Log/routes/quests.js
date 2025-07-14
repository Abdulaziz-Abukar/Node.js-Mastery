const express = require("express");
const router = express.Router({ mergeParams: true });
const Quest = require("../models/Quest");

const validateRequest = require("../middleware/validateRequests");
const checkUserExists = require("../middleware/checkUserExists");
const { createQuestValidator } = require("../validators/createQuestValidator");
const {
  successResponse,
  errorResponse,
  createdResponse,
} = require("../utils/responseHandler");
const User = require("../models/User");

router.use(checkUserExists);

router.param("questId", async (req, res, next, questId) => {
  const { userId } = req.params;
  try {
    const quest = await Quest.findOne({ _id: questId, user: userId });
    if (!quest) {
      return errorResponse(res, "Quest not found for this user", {}, 404);
    }

    req.quest = quest;
    next();
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server Error", {}, 500);
  }
});

router.get("/", async (req, res) => {
  const { userId } = req.params;

  try {
    const quests = await Quest.find({ user: userId });

    if (!quests || quests.length === 0) {
      return errorResponse(res, "No quests found for this user", {}, 404);
    }

    return successResponse(res, "Quests retrieved successfully!", quests);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

router.get("/:questId", async (req, res) => {
  return successResponse(res, "Quest retrieved successfully", req.quest);
});

router.post("/", createQuestValidator, validateRequest, async (req, res) => {
  const { title, description, xpReward, status } = req.body;
  const { userId } = req.params;
  try {
    const newQuest = await Quest.create({
      title,
      description,
      xpReward,
      status,
      user: userId, // find user linked to quest
    });
    return createdResponse(res, "Quest created successfully", newQuest);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

router.put(
  "/:questId",
  createQuestValidator,
  validateRequest,
  async (req, res) => {
    const { userId, questId } = req.params;
    const { title, description, xpReward, status } = req.body;

    try {
      const previousStatus = req.quest.status;

      const updateQuest = await Quest.findOneAndUpdate(
        { _id: questId, user: userId },
        { title, description, xpReward, status },
        { new: true, runValidators: true }
      );

      // if quest was NOT completed, but now IS completed
      if (
        previousStatus !== "completed" &&
        updateQuest.status === "completed"
      ) {
        const user = await User.findById(userId);
        user.xp += updateQuest.xpReward;
        await user.save();
      }

      return successResponse(res, "Quest updated successfully", updateQuest);
    } catch (err) {
      console.error(err.message);
      return errorResponse(res, "Server error", {}, 500);
    }
  }
);

router.delete("/:questId", async (req, res) => {
  try {
    await req.quest.deleteOne();
    return successResponse(res, "Quest deleted successfully", req.quest);
  } catch (err) {
    console.error(err.message);
    return errorResponse(res, "Server error", {}, 500);
  }
});

module.exports = router;
