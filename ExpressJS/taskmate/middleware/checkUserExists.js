const { userTasks } = require("../data/mockData");

function checkUserExists(req, res, next) {
  const userId = req.params.userId;

  if (!userTasks[userId]) {
    return res.status(404).send("Error: UserID doesn't exist");
  }

  req.userTasks = userTasks[userId];
  next();
}
module.exports = checkUserExists;
