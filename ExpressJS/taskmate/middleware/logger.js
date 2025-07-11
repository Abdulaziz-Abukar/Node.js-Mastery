function logger(req, res, next) {
  console.log(`[LOG]: Method: ${req.method} | PATH: ${req.path}`);
  next();
}

module.exports = logger;
