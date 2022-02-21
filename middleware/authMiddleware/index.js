const jwt = require("jsonwebtoken");
require("dotenv").config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Header token set to use with next.js and axios
  // token is set on header, because for some reason even with { withCredentials: true }
  // cookie was not sent to server
  const headerToken = req.headers.authorization;

  // check json web token exists & is verified
  if (token || headerToken) {
    jwt.verify(token || headerToken, "secret", (err, decodedToken) => {
      if (err) {
        res.status(403).json(err);
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

module.exports = { requireAuth };
