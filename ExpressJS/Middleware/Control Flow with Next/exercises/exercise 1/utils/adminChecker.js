function adminChecker(req, res, next) {
  const isAdmin = req.query.admin;

  if (isAdmin === "false") {
    return res.status(401).send("Must be admin to login.");
  }

  next();
}

module.exports = adminChecker;
