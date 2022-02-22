require("dotenv").config({ path: "./.env" });
const jwtSecret = process.env.JWT_SECRET;

module.exports = {
  jwtSecretKey: jwtSecret,
};
