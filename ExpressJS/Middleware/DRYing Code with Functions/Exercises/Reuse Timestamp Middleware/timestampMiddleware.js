function addTimeStamp(req, res, next) {
  req.timestamp = new Date().toISOString();
  console.log(req.timestamp);
  next();
}

module.exports = addTimeStamp;
