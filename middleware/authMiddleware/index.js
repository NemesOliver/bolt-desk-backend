const jwt = require("jsonwebtoken");
const config = require("../../config/config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Header token set to use with next.js
  // token is set on header, because for some reason even with { withCredentials: true }
  // cookie was not sent to server
  const headerToken = req.headers.authorization;

  // check json web token exists & is verified
  if (token || headerToken) {
    jwt.verify(
      token || headerToken,
      config.jwtSecretKey,
      (err, decodedToken) => {
        if (err) {
          res.status(403).json(err);
        } else {
          next();
        }
      }
    );
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

module.exports = { requireAuth };
