const nameChecker = (req, res, next) => {
  if (!req.query.name) {
    return res.status(400).send("ERROR: No name provided");
  }

  next();
};

module.exports = nameChecker;
