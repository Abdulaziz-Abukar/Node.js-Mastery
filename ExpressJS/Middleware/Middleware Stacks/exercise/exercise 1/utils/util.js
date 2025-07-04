const logger = (req, res, next) => {
  console.log(`[LOG]: Method: ${req.method} | PATH: ${req.path}`);
  next();
};

const fakeAuth = (req, res, next) => {
  req.user = "Admin";
  next();
};

const validateQuery = (req, res, next) => {
  if (!req.query.size) {
    return res.status(400).send("Could not identify a size.");
  }

  next();
};

module.exports = { logger, fakeAuth, validateQuery };
