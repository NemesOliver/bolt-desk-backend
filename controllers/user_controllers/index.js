const User = require("../../models/User");
const { handleErrors } = require("../libs/handleErrors");

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
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    res.status(201).json(user);
  } catch (e) {
    const errors = handleErrors(e, { email: "", password: "" }, "email");
    res.status(400).json({ errors });
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
    const errors = handleErrors(e, { email: "" }, "email");
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
