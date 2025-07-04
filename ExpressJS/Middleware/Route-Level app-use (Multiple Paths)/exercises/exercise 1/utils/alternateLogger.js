const alternateLogger = (req, res, next) => {
  if (req.baseUrl.startsWith("/pants")) {
    next();
  } else {
    console.log("Clothing route hit: ", req.path);
    next();
  }
};
module.exports = alternateLogger;
