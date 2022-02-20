const User = require("../../models/User");
const { handleErrors } = require("../libs/handleErrors");

// CREATE NEW USER
/**
 * Creates new user in database based on email and password
 *
 * @param {String} req
 * @param {*} res
 */
module.exports.create_user = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    res.status(201).json(user);
  } catch (e) {
    const errors = handleErrors(e, { email: "", password: "" });
    res.status(400).json({ errors });
  }
};
