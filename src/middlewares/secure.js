function secure(req, res, next) {
  if (!req.session.login) {
    next();
  } else {
    res.redirect("/");
  }
}

function check(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = { secure, check };
