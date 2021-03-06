const User = require("../../models/User");
const handleUserValidationErrors = require("./libs/handleUserValidationErrors");
const config = require("../../config/config");

// jwt token creation
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = (id) => {
  return jwt.sign({ id }, config.jwtSecretKey, { expiresIn: maxAge });
};

// GET ALL USERS
/**
 * Fetch all users from database
 */
module.exports.get_users = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// GET SINGLE USERS
/**
 * Fetch single user from database
 */
module.exports.get_user = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// CREATE NEW USER
/**
 * Creates new user in database based on email and password
 *
 * @param {String} req
 * @param {*} res
 */
module.exports.create_user = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.create({ email, password, name });
    // create jwt token
    const token = createToken(user._id);

    res
      .status(201)
      .json({ user: { _id: user._id, email: user.email }, jwt: token });
  } catch (e) {
    const errors = handleUserValidationErrors(e);
    res.status(400).json({ errors });
  }
};

// LOGIN USER
/**
 * Authenticates user and send JWT token res
 *
 */
module.exports.login_user = async (req, res) => {
  const _id = req.params.id;
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(_id);

    res
      .status(200)
      .json({ user: { _id: user._id, email: user.email }, jwt: token });
  } catch (e) {
    res.status(403).json(e);
  }
};

// UPDATE EXISTING USER
/**
 * Updates user in database
 */
module.exports.update_user = async (req, res) => {
  const _id = req.params.id;
  const { email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(_id, { email }, { new: true });

    res.status(200).json(user);
  } catch (e) {
    const errors = handleUserValidationErrors(e);
    res.status(400).json({ errors });
  }
};

// DELETE EXISTING USER
/**
 * Deletes user from database
 */
module.exports.delete_user = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);

    res.status(202).json(user);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
