const profileLogger = (req, res, next) => {
  console.log("Checking profile...");
  next();
};

module.exports = profileLogger;
