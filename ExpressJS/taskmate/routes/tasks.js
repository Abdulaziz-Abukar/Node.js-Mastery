const express = require("express");
const router = express.Router({ mergeParams: true });
const idGenerator = require("../utils/idGenerator");
const checkUserExists = require("../middleware/checkUserExists");
const data = require("../data/mockData");

const { userTasks } = data;

router.use(checkUserExists);

router.get("/", (req, res) => {
  res.json(req.userTasks);
});

router.get("/:id", (req, res) => {
  const targetId = Number(req.params.id);
  const taskTarget = req.userTasks.find((task) => task.id === targetId);

  if (!taskTarget) {
    return res.status(404).send("Error: Task doesn't exist");
  }

  res.status(200).json(taskTarget);
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title || completed === undefined) {
    res.status(400).send("Error: Missing input fields");
  }

  const newTask = {
    id: idGenerator(),
    title,
    completed,
  };

  req.userTasks.push(newTask);

  res.status(201).json({
    message: "Task created!",
    task: newTask,
  });
});

router.delete("/:id", (req, res) => {
  const targetIndex = Number(req.params.id);
  const targetTaskIndex = req.userTasks.findIndex(
    (task) => task.id === targetIndex
  );

  if (targetTaskIndex === -1) {
    return res.status(404).send("Error: task does not exist");
  }

  req.userTasks.splice(targetTaskIndex, 1);
  res.status(200).send("Task deleted!");
});
module.exports = router;
