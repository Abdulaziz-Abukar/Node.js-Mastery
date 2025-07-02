function shirtsLogger(req, res, next) {
  console.log("Accessed shirts route");
  next();
}

module.exports = shirtsLogger;
