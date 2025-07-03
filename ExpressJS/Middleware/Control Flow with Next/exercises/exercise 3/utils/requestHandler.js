const requestHandler = (req, res, next) => {
  const limitReached = false;

  if (limitReached) {
    return res.status(429).send("too many requests");
  }
  next();
};

module.exports = requestHandler;
