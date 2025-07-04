const logger = (req, res, next) => {
  console.log("Accessed clothing route");
  next();
};
module.exports = logger;
